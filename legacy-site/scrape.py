import urllib.request
import urllib.parse
import re
import os
import json
from html.parser import HTMLParser

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

base_url = 'https://analytixbss.com/technew/'

def fetch(url):
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as resp:
            return resp.read().decode('utf-8', errors='ignore')
    except Exception as e:
        print(f"Error fetching {url}: {e}")
        return ""

homepage_html = fetch(base_url)
with open("homepage.html", "w", encoding="utf-8") as f:
    f.write(homepage_html)

# Extract internal links
found_links = set(re.findall(r'href=["\'](https?://analytixbss\.com/technew/[^"\']*)["\']', homepage_html))
found_relative = set(re.findall(r'href=["\']([^"\':#]+\.html|[^"\':#]+/?)["\']', homepage_html))

all_urls = {base_url}
for l in found_links:
    all_urls.add(l)
for r in found_relative:
    if not r.startswith('http') and not r.startswith('mailto:') and not r.startswith('tel:'):
        full = urllib.parse.urljoin(base_url, r)
        if 'analytixbss.com/technew' in full:
            all_urls.add(full)

print(f"Discovered {len(all_urls)} URLs:")
for u in sorted(all_urls):
    print(" -", u)

pages_data = {}

for u in sorted(all_urls):
    print(f"Fetching {u}...")
    html = fetch(u)
    # clean filename key
    path_key = u.replace(base_url, "").strip("/")
    if not path_key:
        path_key = "index"
    path_key = path_key.replace("/", "_")
    with open(f"page_{path_key}.html", "w", encoding="utf-8") as f:
        f.write(html)
    pages_data[u] = {
        "key": path_key,
        "len": len(html)
    }

print("Done downloading all pages!")
