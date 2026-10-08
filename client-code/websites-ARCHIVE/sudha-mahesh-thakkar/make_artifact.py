import os
with open('/Users/tejjo/Desktop/websites/sudha-mahesh-thakkar/index.html', 'r') as f:
    code = f.read()
with open('/Users/tejjo/.gemini/antigravity/brain/d27431cf-30d8-4de8-9827-c62cf3e5c03c/source_code.md', 'w') as f:
    f.write('```html\n' + code + '\n```\n')
