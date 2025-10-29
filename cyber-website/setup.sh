#!/bin/bash

# BizBots Website Setup Script
# This script helps you set up the project quickly

echo "========================================="
echo "  BizBots Website - Quick Setup"
echo "========================================="
echo ""

# Check if Docker is installed
if command -v docker &> /dev/null; then
    echo "✓ Docker is installed"
else
    echo "✗ Docker is not installed"
    echo "  Please install Docker from https://docs.docker.com/get-docker/"
    exit 1
fi

# Check if Docker Compose is installed
if command -v docker-compose &> /dev/null; then
    echo "✓ Docker Compose is installed"
else
    echo "✗ Docker Compose is not installed"
    echo "  Please install Docker Compose"
    exit 1
fi

echo ""
echo "Creating necessary directories..."

# Create assets directories if they don't exist
mkdir -p assets/css
mkdir -p assets/js
mkdir -p assets/images
mkdir -p assets/icons
mkdir -p docs

echo "✓ Directories created"
echo ""

# Download a placeholder hero image if needed
if [ ! -f "assets/images/hero.jpg" ]; then
    echo "Downloading placeholder hero image..."
    # Using a free placeholder service
    curl -s -o assets/images/hero.jpg "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop" || echo "Note: Could not download placeholder image. Please add your own hero.jpg"
fi

echo ""
echo "========================================="
echo "  Setup Options"
echo "========================================="
echo ""
echo "Choose how you want to run the website:"
echo ""
echo "1) Docker (Recommended for production)"
echo "2) Local server (Simple Python HTTP server)"
echo "3) Just create files (I'll deploy manually)"
echo ""
read -p "Enter your choice (1-3): " choice

case $choice in
    1)
        echo ""
        echo "Starting Docker containers..."
        docker-compose up -d
        echo ""
        echo "✓ Docker container started successfully!"
        echo ""
        echo "Your website is now running at:"
        echo "  → http://localhost:8080"
        echo ""
        echo "To stop the container, run:"
        echo "  docker-compose down"
        ;;
    2)
        echo ""
        echo "Starting Python HTTP server..."
        echo ""
        echo "Your website is now running at:"
        echo "  → http://localhost:8000"
        echo ""
        echo "Press Ctrl+C to stop the server"
        echo ""
        python3 -m http.server 8000
        ;;
    3)
        echo ""
        echo "✓ Files are ready!"
        echo ""
        echo "Next steps:"
        echo "  1. Add your logo to assets/images/logo.svg"
        echo "  2. Add your hero image to assets/images/hero.jpg"
        echo "  3. Update contact information in all HTML files"
        echo "  4. Deploy using one of these methods:"
        echo "     - Docker: docker-compose up -d"
        echo "     - Netlify: Drag and drop to app.netlify.com/drop"
        echo "     - Vercel: vercel"
        echo ""
        echo "See DEPLOYMENT.md for detailed instructions"
        ;;
    *)
        echo "Invalid choice. Exiting."
        exit 1
        ;;
esac

echo ""
echo "========================================="
echo "  Setup Complete!"
echo "========================================="
echo ""
echo "For deployment instructions, see DEPLOYMENT.md"
echo "For customization, see README.md"
echo ""
echo "Need help? Contact: dev@bizbots.co.ke"
echo ""