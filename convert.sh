#!/bin/bash

cd /tmp/src/routes

# Function to convert a route file
convert_route() {
    local file="$1"
    local base="${file%.tsx}"
    
    # Skip special files
    if [[ "$base" == "__root" ]] || [[ "$base" == "routeTree"* ]]; then
        return
    fi
    
    # Determine output path
    local output_path=""
    if [[ "$base" == "index" ]]; then
        output_path="/vercel/share/v0-project/app/page.tsx"
    else
        # Split by dots for nested routes
        local parts=(${base//./ })
        if [[ ${#parts[@]} -gt 1 ]]; then
            # Nested route: about.about-nexova -> about/about-nexova/page.tsx
            local dir=$(IFS=/; echo "${parts[*]}")
            output_path="/vercel/share/v0-project/app/$dir/page.tsx"
        else
            # Top-level route: about -> about/page.tsx
            output_path="/vercel/share/v0-project/app/${parts[0]}/page.tsx"
        fi
    fi
    
    # Create directory if needed
    mkdir -p "$(dirname "$output_path")"
    
    # Transform the file
    cat "$file" | \
        sed 's/import { createFileRoute } from "@tanstack\/react-router";//' | \
        sed 's/import { createFileRoute, Link } from "@tanstack\/react-router";/import Link from "next\/link";/' | \
        sed 's/import { Link } from "@tanstack\/react-router";/import Link from "next\/link";/' | \
        sed 's/<Link to=/<Link href=/g' | \
        perl -0pe 's/export const Route = createFileRoute\([^)]+\)\(\{[^}]*?component:\s*(\w+)[^}]*?\}\);//gs' | \
        perl -pe 's/^function (\w+Page)\(/$1 = function \1(/; s/^function (\w+Page)\((?!.*export)/$1 = function \1(/' | \
        perl -0pe 's/head:\s*\(\)\s*=>\s*\(\{[^}]*?\}\),?//gs' \
        > "$output_path"
    
    # Ensure default export
    if ! grep -q "export default" "$output_path"; then
        # Try to find the main component and export it
        local component=$(grep -oP '(?<=^function )\w+(?=Page\()' "$output_path" | head -1)
        if [[ -n "$component" ]]; then
            component="${component}Page"
            sed -i "s/^function $component(/export default function $component(/" "$output_path"
        fi
    fi
    
    echo "✓ Converted $(basename $file) → ${output_path##/vercel/share/v0-project/}"
}

# Convert all route files
for file in *.tsx; do
    convert_route "$file"
done

echo "✓ All routes converted!"
