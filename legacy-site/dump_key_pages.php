<?php
$pages = [
    'index' => 'page_index.html',
    'about' => 'page_about-us.html',
    'services' => 'page_our-services.html',
    'design' => 'page_our-services_design.html',
    'dev' => 'page_our-services_development.html',
    'marketing' => 'page_our-services_marketing.html',
    'smart_schedule' => 'page_services_smart-schedule-control.html',
    'odoo' => 'page_solutions_odoo-erp-implementation.html',
    'ai' => 'page_solutions_ai-process-automation.html',
    'cyber' => 'page_solutions_aramco-cybersecurity-compliance.html',
    'fnb' => 'page_industries_odoo-for-fnb.html',
    'logistics' => 'page_industries_odoo-for-logistics.html',
    'manufacturing' => 'page_industries_odoo-for-manufacturing.html',
    'construction' => 'page_industries_odoo-for-construction.html',
    'blog' => 'page_blog.html',
    'contact' => 'page_contact-us.html',
    'post1' => 'page_how-aramco-cybersecurity-standards-protect-the-local-economy.html',
    'post2' => 'page_odoo-why-modern-businesses-are-leaving-disconnected-tools-behind.html',
    'post3' => 'page_why-the-future-of-tech-is-powered-by-humans.html',
    'post4' => 'page_why-your-marketing-might-be-leaking-revenue.html'
];

$allContent = [];

foreach ($pages as $key => $file) {
    $path = __DIR__ . '/' . $file;
    if (!file_exists($path)) {
        echo "Missing: $file\n";
        continue;
    }
    $html = file_get_contents($path);
    echo "========================================================\n";
    echo "=== PAGE: $key ($file) ===\n";
    echo "========================================================\n";
    preg_match('/<title>(.*?)<\/title>/is', $html, $mTitle);
    $title = trim(html_entity_decode($mTitle[1] ?? 'None'));
    echo "Title: $title\n";
    
    // Extract main text content blocks
    $doc = new DOMDocument();
    @$doc->loadHTML('<?xml encoding="utf-8" ?>' . $html, LIBXML_NOERROR | LIBXML_NOWARNING);
    $xpath = new DOMXPath($doc);
    
    $nodes = $xpath->query('//h1 | //h2 | //h3 | //h4 | //p | //li');
    $blocks = [];
    foreach ($nodes as $node) {
        $text = trim(preg_replace('/\s+/', ' ', $node->nodeValue));
        if (strlen($text) > 2) {
            $blocks[] = [
                'tag' => $node->nodeName,
                'text' => html_entity_decode($text)
            ];
        }
    }
    
    $allContent[$key] = [
        'title' => $title,
        'blocks' => $blocks
    ];
    
    echo "Extracted " . count($blocks) . " text blocks.\n\n";
}

file_put_contents(__DIR__ . '/extracted_full_site.json', json_encode($allContent, JSON_PRETTY_PRINT));
echo "Saved extracted_full_site.json successfully!\n";
