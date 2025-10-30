#!/usr/bin/env python3
"""
Script to update all service pages with consistent sidebar navigation
"""

import os
import re
from pathlib import Path

# Define the sidebar navigation HTML
SIDEBAR_HTML = '''<!-- SIDEBAR NAVIGATION -->
<div class="sidebar" id="sidebar">
	<div class="brand">
		<img src="/assets/images/logo.svg" alt="BizBit Solutions Logo" />
		<h2>BizBit <span class="text-blue-600">Solutions</span></h2>
	</div>
	
	<ul class="nav-links">
		<li><a href="/index.html"><i class="fas fa-home"></i> Home</a></li>
		
		<!-- Web & System Development -->
		<li>
			<button class="dropdown-btn{web_active}" aria-haspopup="true" aria-expanded="{web_expanded}">
				<i class="fas fa-code"></i> Web & System Development
			</button>
			<ul class="dropdown-container{web_show}">
				<li><a href="/services/website-design-seo.html"{website_active}>Website Design & SEO</a></li>
				<li><a href="/services/ecommerce-pos-systems.html"{ecommerce_active}>E-commerce & POS Systems</a></li>
				<li><a href="/services/crm-erp-implementation.html"{crm_active}>CRM & ERP Implementation</a></li>
				<li><a href="/services/progressive-web-apps-pwa.html"{pwa_active}>Progressive Web Apps (PWA)</a></li>
			</ul>
		</li>
		
		<!-- AI & Chatbot Solutions -->
		<li>
			<button class="dropdown-btn{ai_active}" aria-haspopup="true" aria-expanded="{ai_expanded}">
				<i class="fas fa-robot"></i> AI & Chatbot Solutions
			</button>
			<ul class="dropdown-container{ai_show}">
				<li><a href="/services/customer-service-chatbots.html"{chatbots_active}>Customer Service Chatbots</a></li>
				<li><a href="/services/whatsapp-social-media-bots.html"{whatsapp_active}>WhatsApp & Social Media Bots</a></li>
				<li><a href="/services/recommendation-engines.html"{recommendation_active}>Recommendation Engines</a></li>
				<li><a href="/services/machine-learning-models.html"{ml_active}>Machine Learning Models</a></li>
			</ul>
		</li>
		
		<!-- Networking & CCTV -->
		<li>
			<button class="dropdown-btn{network_active}" aria-haspopup="true" aria-expanded="{network_expanded}">
				<i class="fas fa-network-wired"></i> Networking & CCTV
			</button>
			<ul class="dropdown-container{network_show}">
				<li><a href="/services/network-design-installation.html"{network_design_active}>Network Design & Installation</a></li>
				<li><a href="/services/cctv-surveillance-systems.html"{cctv_active}>CCTV & Surveillance Systems</a></li>
				<li><a href="/services/wireless-wifi-solutions.html"{wireless_active}>Wireless & WiFi Solutions</a></li>
				<li><a href="/services/network-security-firewalls.html"{security_active}>Network Security & Firewalls</a></li>
			</ul>
		</li>
		
		<!-- M-Pesa Integration -->
		<li>
			<button class="dropdown-btn{mpesa_active}" aria-haspopup="true" aria-expanded="{mpesa_expanded}">
				<i class="fas fa-mobile-alt"></i> M-Pesa Integration
			</button>
			<ul class="dropdown-container{mpesa_show}">
				<li><a href="/services/daraja-api-integration.html"{daraja_active}>Daraja API Integration</a></li>
				<li><a href="/services/stk-push-payment-collection.html"{stk_active}>STK Push & Payment Collection</a></li>
				<li><a href="/services/b2b-b2c-payment-solutions.html"{b2b_active}>B2B & B2C Payment Solutions</a></li>
				<li><a href="/services/transaction-tracking-reporting.html"{transaction_active}>Transaction Tracking & Reporting</a></li>
			</ul>
		</li>
		
		<!-- Accounting & Bookkeeping -->
		<li>
			<button class="dropdown-btn{accounting_active}" aria-haspopup="true" aria-expanded="{accounting_expanded}">
				<i class="fas fa-calculator"></i> Accounting & Bookkeeping
			</button>
			<ul class="dropdown-container{accounting_show}">
				<li><a href="/services/monthly-bookkeeping-packages.html"{bookkeeping_active}>Monthly Bookkeeping Packages</a></li>
				<li><a href="/services/financial-reporting-dashboards.html"{financial_active}>Financial Reporting Dashboards</a></li>
				<li><a href="/services/invoice-expense-management.html"{invoice_active}>Invoice & Expense Management</a></li>
				<li><a href="/services/tax-compliance-automation.html"{tax_compliance_active}>Tax Compliance Automation</a></li>
			</ul>
		</li>
		
		<!-- Digital Marketing -->
		<li>
			<button class="dropdown-btn{marketing_active}" aria-haspopup="true" aria-expanded="{marketing_expanded}">
				<i class="fas fa-bullhorn"></i> Digital Marketing
			</button>
			<ul class="dropdown-container{marketing_show}">
				<li><a href="/services/search-engine-optimization.html"{seo_active}>Search Engine Optimization (SEO)</a></li>
				<li><a href="/services/social-media-management.html"{social_active}>Social Media Management</a></li>
				<li><a href="/services/content-marketing-strategy.html"{content_active}>Content Marketing Strategy</a></li>
				<li><a href="/services/email-marketing-campaigns.html"{email_active}>Email Marketing Campaigns</a></li>
			</ul>
		</li>
		
		<!-- Business Services -->
		<li>
			<button class="dropdown-btn{business_active}" aria-haspopup="true" aria-expanded="{business_expanded}">
				<i class="fas fa-briefcase"></i> Business Services
			</button>
			<ul class="dropdown-container{business_show}">
				<li><a href="/services/brand-strategy-business-identity.html"{brand_active}>Brand Strategy & Business Identity</a></li>
				<li><a href="/services/business-automation-operations.html"{automation_active}>Business Automation & Operations</a></li>
				<li><a href="/services/outsourced-back-office-support.html"{outsourced_active}>Outsourced Back-Office Support</a></li>
				<li><a href="/services/client-dashboard-support-services.html"{dashboard_active}>Client Dashboard & Support Services</a></li>
			</ul>
		</li>
		
		<!-- Tax & Compliance Services -->
		<li>
			<button class="dropdown-btn{compliance_active}" aria-haspopup="true" aria-expanded="{compliance_expanded}">
				<i class="fas fa-file-invoice-dollar"></i> Tax & Compliance Services
			</button>
			<ul class="dropdown-container{compliance_show}">
				<li><a href="/services/tax-advisory-filing.html"{tax_advisory_active}>Tax Advisory & Filing</a></li>
				<li><a href="/services/ecitizen-government-services.html"{ecitizen_active}>eCitizen & Government Services</a></li>
				<li><a href="/services/ntsa-etims-sha-compliance.html"{ntsa_active}>NTSA, eTIMS & SHA Compliance</a></li>
				<li><a href="/services/corporate-registration-legal-services.html"{corporate_active}>Corporate Registration & Legal Services</a></li>
			</ul>
		</li>
		
		<li><a href="/about.html"><i class="fas fa-info-circle"></i> About</a></li>
		<li><a href="/contact.html"><i class="fas fa-envelope"></i> Contact</a></li>
	</ul>
</div>

<!-- SIDEBAR OVERLAY FOR MOBILE -->
<div class="sidebar-overlay" id="sidebar-overlay"></div>

<!-- MAIN CONTENT -->
<div class="main-content" id="main-content">
	<!-- HAMBURGER TOGGLE BUTTON -->
	<button id="toggle-btn" class="hamburger" aria-label="Toggle navigation">
		<i class="fas fa-bars"></i>
	</button>

	<main>'''

# Service page mappings for active states
SERVICE_MAPPINGS = {
    'website-design-seo.html': {
        'web_active': ' active', 'web_expanded': 'true', 'web_show': ' show',
        'website_active': ' class="active"'
    },
    'ecommerce-pos-systems.html': {
        'web_active': ' active', 'web_expanded': 'true', 'web_show': ' show',
        'ecommerce_active': ' class="active"'
    },
    'crm-erp-implementation.html': {
        'web_active': ' active', 'web_expanded': 'true', 'web_show': ' show',
        'crm_active': ' class="active"'
    },
    'progressive-web-apps-pwa.html': {
        'web_active': ' active', 'web_expanded': 'true', 'web_show': ' show',
        'pwa_active': ' class="active"'
    },
    'customer-service-chatbots.html': {
        'ai_active': ' active', 'ai_expanded': 'true', 'ai_show': ' show',
        'chatbots_active': ' class="active"'
    },
    'whatsapp-social-media-bots.html': {
        'ai_active': ' active', 'ai_expanded': 'true', 'ai_show': ' show',
        'whatsapp_active': ' class="active"'
    },
    'recommendation-engines.html': {
        'ai_active': ' active', 'ai_expanded': 'true', 'ai_show': ' show',
        'recommendation_active': ' class="active"'
    },
    'machine-learning-models.html': {
        'ai_active': ' active', 'ai_expanded': 'true', 'ai_show': ' show',
        'ml_active': ' class="active"'
    },
    'network-design-installation.html': {
        'network_active': ' active', 'network_expanded': 'true', 'network_show': ' show',
        'network_design_active': ' class="active"'
    },
    'cctv-surveillance-systems.html': {
        'network_active': ' active', 'network_expanded': 'true', 'network_show': ' show',
        'cctv_active': ' class="active"'
    },
    'wireless-wifi-solutions.html': {
        'network_active': ' active', 'network_expanded': 'true', 'network_show': ' show',
        'wireless_active': ' class="active"'
    },
    'network-security-firewalls.html': {
        'network_active': ' active', 'network_expanded': 'true', 'network_show': ' show',
        'security_active': ' class="active"'
    },
    'daraja-api-integration.html': {
        'mpesa_active': ' active', 'mpesa_expanded': 'true', 'mpesa_show': ' show',
        'daraja_active': ' class="active"'
    },
    'stk-push-payment-collection.html': {
        'mpesa_active': ' active', 'mpesa_expanded': 'true', 'mpesa_show': ' show',
        'stk_active': ' class="active"'
    },
    'b2b-b2c-payment-solutions.html': {
        'mpesa_active': ' active', 'mpesa_expanded': 'true', 'mpesa_show': ' show',
        'b2b_active': ' class="active"'
    },
    'transaction-tracking-reporting.html': {
        'mpesa_active': ' active', 'mpesa_expanded': 'true', 'mpesa_show': ' show',
        'transaction_active': ' class="active"'
    },
    'monthly-bookkeeping-packages.html': {
        'accounting_active': ' active', 'accounting_expanded': 'true', 'accounting_show': ' show',
        'bookkeeping_active': ' class="active"'
    },
    'financial-reporting-dashboards.html': {
        'accounting_active': ' active', 'accounting_expanded': 'true', 'accounting_show': ' show',
        'financial_active': ' class="active"'
    },
    'invoice-expense-management.html': {
        'accounting_active': ' active', 'accounting_expanded': 'true', 'accounting_show': ' show',
        'invoice_active': ' class="active"'
    },
    'tax-compliance-automation.html': {
        'accounting_active': ' active', 'accounting_expanded': 'true', 'accounting_show': ' show',
        'tax_compliance_active': ' class="active"'
    },
    'search-engine-optimization.html': {
        'marketing_active': ' active', 'marketing_expanded': 'true', 'marketing_show': ' show',
        'seo_active': ' class="active"'
    },
    'social-media-management.html': {
        'marketing_active': ' active', 'marketing_expanded': 'true', 'marketing_show': ' show',
        'social_active': ' class="active"'
    },
    'content-marketing-strategy.html': {
        'marketing_active': ' active', 'marketing_expanded': 'true', 'marketing_show': ' show',
        'content_active': ' class="active"'
    },
    'email-marketing-campaigns.html': {
        'marketing_active': ' active', 'marketing_expanded': 'true', 'marketing_show': ' show',
        'email_active': ' class="active"'
    },
    'brand-strategy-business-identity.html': {
        'business_active': ' active', 'business_expanded': 'true', 'business_show': ' show',
        'brand_active': ' class="active"'
    },
    'business-automation-operations.html': {
        'business_active': ' active', 'business_expanded': 'true', 'business_show': ' show',
        'automation_active': ' class="active"'
    },
    'outsourced-back-office-support.html': {
        'business_active': ' active', 'business_expanded': 'true', 'business_show': ' show',
        'outsourced_active': ' class="active"'
    },
    'client-dashboard-support-services.html': {
        'business_active': ' active', 'business_expanded': 'true', 'business_show': ' show',
        'dashboard_active': ' class="active"'
    },
    'tax-advisory-filing.html': {
        'compliance_active': ' active', 'compliance_expanded': 'true', 'compliance_show': ' show',
        'tax_advisory_active': ' class="active"'
    },
    'ecitizen-government-services.html': {
        'compliance_active': ' active', 'compliance_expanded': 'true', 'compliance_show': ' show',
        'ecitizen_active': ' class="active"'
    },
    'ntsa-etims-sha-compliance.html': {
        'compliance_active': ' active', 'compliance_expanded': 'true', 'compliance_show': ' show',
        'ntsa_active': ' class="active"'
    },
    'corporate-registration-legal-services.html': {
        'compliance_active': ' active', 'compliance_expanded': 'true', 'compliance_show': ' show',
        'corporate_active': ' class="active"'
    }
}

def get_active_states(filename):
    """Get active states for a specific service page"""
    # Default all states to empty
    states = {
        'web_active': '', 'web_expanded': 'false', 'web_show': '',
        'ai_active': '', 'ai_expanded': 'false', 'ai_show': '',
        'network_active': '', 'network_expanded': 'false', 'network_show': '',
        'mpesa_active': '', 'mpesa_expanded': 'false', 'mpesa_show': '',
        'accounting_active': '', 'accounting_expanded': 'false', 'accounting_show': '',
        'marketing_active': '', 'marketing_expanded': 'false', 'marketing_show': '',
        'business_active': '', 'business_expanded': 'false', 'business_show': '',
        'compliance_active': '', 'compliance_expanded': 'false', 'compliance_show': '',
        'website_active': '', 'ecommerce_active': '', 'crm_active': '', 'pwa_active': '',
        'chatbots_active': '', 'whatsapp_active': '', 'recommendation_active': '', 'ml_active': '',
        'network_design_active': '', 'cctv_active': '', 'wireless_active': '', 'security_active': '',
        'daraja_active': '', 'stk_active': '', 'b2b_active': '', 'transaction_active': '',
        'bookkeeping_active': '', 'financial_active': '', 'invoice_active': '', 'tax_compliance_active': '',
        'seo_active': '', 'social_active': '', 'content_active': '', 'email_active': '',
        'brand_active': '', 'automation_active': '', 'outsourced_active': '', 'dashboard_active': '',
        'tax_advisory_active': '', 'ecitizen_active': '', 'ntsa_active': '', 'corporate_active': ''
    }
    
    # Update with specific active states for this file
    if filename in SERVICE_MAPPINGS:
        states.update(SERVICE_MAPPINGS[filename])
    
    return states

def update_service_page(filepath):
    """Update a single service page with sidebar navigation"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        filename = os.path.basename(filepath)
        print(f"Updating {filename}...")
        
        # Get active states for this page
        active_states = get_active_states(filename)
        
        # Generate sidebar HTML with active states
        sidebar_html = SIDEBAR_HTML.format(**active_states)
        
        # Add Font Awesome if not present
        if 'font-awesome' not in content:
            content = content.replace(
                '<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">',
                '<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">\n    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">'
            )
        
        # Replace header section with sidebar
        header_pattern = r'<body[^>]*>.*?<!-- MAIN CONTENT -->\s*<main>'
        if re.search(header_pattern, content, re.DOTALL):
            content = re.sub(
                header_pattern,
                f'<body class="antialiased text-gray-800 bg-gray-50">\n\n{sidebar_html}',
                content,
                flags=re.DOTALL
            )
        
        # Update script tags
        content = content.replace(
            '<script src="/assets/js/ui.js"></script>',
            '<script src="/assets/js/ui.js" defer></script>'
        )
        
        # Add closing div for main-content
        content = content.replace(
            '</body>\n\n</html>',
            '\n\t</div> <!-- End main-content -->\n\n</body>\n\n</html>'
        )
        
        # Write updated content
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"✅ Successfully updated {filename}")
        return True
        
    except Exception as e:
        print(f"❌ Error updating {filename}: {str(e)}")
        return False

def main():
    """Main function to update all service pages"""
    services_dir = Path('services')
    
    if not services_dir.exists():
        print("❌ Services directory not found!")
        return
    
    # Get all HTML files in services directory
    html_files = list(services_dir.glob('*.html'))
    
    if not html_files:
        print("❌ No HTML files found in services directory!")
        return
    
    print(f"Found {len(html_files)} service pages to update...")
    
    success_count = 0
    total_count = len(html_files)
    
    for html_file in html_files:
        if update_service_page(html_file):
            success_count += 1
    
    print(f"\n🎉 Update complete!")
    print(f"✅ Successfully updated: {success_count}/{total_count} pages")
    
    if success_count < total_count:
        print(f"❌ Failed to update: {total_count - success_count} pages")

if __name__ == "__main__":
    main()