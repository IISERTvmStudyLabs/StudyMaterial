#!/usr/bin/env python3
import os
import re
from pathlib import Path

def fix_equations_in_file(filepath):
    """Convert single-line $$..$$ equations to multi-line format."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    lines = content.split('\n')
    new_lines = []
    
    for line in lines:
        # Pattern to match single-line equations: $$...$$
        # This matches lines that have $$ ... $$ all on one line
        pattern = r'(.*?)(\$\$)(.+?)(\$\$)(.*)'
        match = re.match(pattern, line)
        
        if match:
            before = match.group(1)
            equation_content = match.group(3)
            after = match.group(5)
            
            # Only convert if there's actual content between the $$
            if equation_content.strip():
                # If there's text before or after the equation on the same line
                if before.strip() or after.strip():
                    # Keep inline equations as-is (like "**Total Time:** $$...$$ text")
                    # These are often meant to be inline
                    # But we still want to convert standalone ones
                    if not before.strip() and not after.strip():
                        # Standalone equation on its own line
                        new_lines.append('$$')
                        new_lines.append(equation_content)
                        new_lines.append('$$')
                    else:
                        # Has text before/after - convert anyway as requested
                        if before.strip():
                            new_lines.append(before.rstrip())
                        new_lines.append('$$')
                        new_lines.append(equation_content)
                        new_lines.append('$$')
                        if after.strip():
                            new_lines.append(after.lstrip())
                else:
                    # No text before or after, standalone equation
                    new_lines.append('$$')
                    new_lines.append(equation_content)
                    new_lines.append('$$')
            else:
                # Empty equation or just $$, keep as-is
                new_lines.append(line)
        else:
            # No equation pattern found, keep line as-is
            new_lines.append(line)
    
    new_content = '\n'.join(new_lines)
    
    # Only write if content changed
    if new_content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return True
    return False

def main():
    # Process .md files in the current working directory
    current_dir = Path.cwd()
    
    modified_files = []
    
    print(f"Processing .md files in: {current_dir}\n")
    
    # Process all .md files in the current directory
    for md_file in sorted(current_dir.glob('*.md')):
        if fix_equations_in_file(md_file):
            modified_files.append(md_file.name)
            print(f"✓ Modified: {md_file.name}")
        else:
            print(f"- No changes: {md_file.name}")
    
    print(f"\n{len(modified_files)} file(s) modified")
    if modified_files:
        print("Modified files:", ', '.join(modified_files))

if __name__ == '__main__':
    main()
