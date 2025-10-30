#!/usr/bin/env python3
"""
Script to fix CSS and JS asset paths in all HTML files
Changes relative paths to absolute paths so they work from any directory
"""

import os
import re
from pathlib import Path

def fix_asset_paths(filepath):
    """Fix asset paths in a single HTML file"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        filename = os.path.basename(filepath)
        print(f"Fixing asset paths in {filename}...")
        
        # Fix CSS paths - change relative to absolute
        content = re.sub(
            r'href="assets/css/style\.css"',
            'href="/assets/css/style.css"',
            content
        )
        
        # Fix JS paths - change relative to absolute  
        content = re.sub(
            r'src="assets/js/ui\.js"',
            'src="/assets/js/ui.js"',
            content
        )
        
        # Also fix main.js if it exists
        content = re.sub(
            r'src="assets/js/main\.js"',
            'src="/assets/js/main.js"',
            content
        )
        
        # Write the fixed content back
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"✅ Fixed asset paths in {filename}")
        return True
        
    except Exception as e:
        print(f"❌ Error fixing {filename}: {str(e)}")
        return False

def main():
    """Fix asset paths in all HTML files"""
    
    # Fix main pages
    main_pages = [
        'index.html',
        'services.html', 
        'about.html',
        'contact.html',
        'dashboard.html',
        'privacy.html'
    ]
    
    print("🔧 Fixing asset paths in main pages...")
    main_success = 0
    for page in main_pages:
        if os.path.exists(page):
            if fix_asset_paths(page):
                main_success += 1
        else:
            print(f"⚠️  {page} not found, skipping...")
    
    # Fix service pages
    services_dir = Path('services')
    if services_dir.exists():
        service_files = list(services_dir.glob('*.html'))
        
        print(f"\n🔧 Fixing asset paths in {len(service_files)} service pages...")
        service_success = 0
        
        for service_file in service_files:
            if fix_asset_paths(service_file):
                service_success += 1
        
        print(f"\n🎉 Asset path fix complete!")
        print(f"✅ Main pages fixed: {main_success}/{len(main_pages)}")
        print(f"✅ Service pages fixed: {service_success}/{len(service_files)}")
        
        total_success = main_success + service_success
        total_files = len(main_pages) + len(service_files)
        
        if total_success == total_files:
            print(f"🎊 Perfect! All {total_files} files fixed successfully!")
        else:
            print(f"⚠️  {total_files - total_success} files had issues")
            
    else:
        print("❌ Services directory not found!")

if __name__ == "__main__":
    main()