import re

with open('/Users/tejjo/Desktop/websites/sudha-mahesh-thakkar/index.html', 'r') as f:
    html = f.read()

# Extract sections
hero = re.search(r'<!-- Hero -->.*?(?=<!-- Marquee -->)', html, re.DOTALL).group(0)
marquee = re.search(r'<!-- Marquee -->.*?(?=<!-- Facility Visual Tour)', html, re.DOTALL).group(0)
gallery = re.search(r'<!-- Facility Visual Tour \(Infinite Marquee of Photos\) -->.*?(?=<!-- Infrastructure Bento Box -->)', html, re.DOTALL).group(0)
infrastructure = re.search(r'<!-- Infrastructure Bento Box -->.*?(?=<!-- Legacy Editorial Section)', html, re.DOTALL).group(0)
legacy = re.search(r'<!-- Legacy Editorial Section \(Inspired by screenshot\) -->.*?(?=<!-- Pipeline Section -->)', html, re.DOTALL).group(0)
pipeline = re.search(r'<!-- Pipeline Section -->.*?(?=<!-- Interactive Map / Location Box -->)', html, re.DOTALL).group(0)
contact = re.search(r'<!-- Interactive Map / Location Box -->.*?(?=</body>)', html, re.DOTALL).group(0)

# Modify navigation
nav_start = html.find('<div class="nav-links">')
nav_end = html.find('</div>', nav_start) + 6
new_nav = '''<div class="nav-links">
            <a href="#why-us" class="magnetic">Why Us</a>
            <a href="#procurement" class="magnetic">Procurement</a>
            <a href="#processing" class="magnetic">Processing & Storage</a>
            <a href="#gallery" class="magnetic">Our Facility</a>
            <a href="#about" class="magnetic">About Us</a>
            <a href="#contact" class="magnetic">Contact Us</a>
        </div>'''

# Create Why Us
why_us = '''
    <!-- Why Us Section -->
    <section id="why-us" style="padding: 8vw 0; background: #FFF;">
        <div class="container">
            <div class="step-num reveal" style="text-align: center; margin-bottom: 1rem;">WHY US</div>
            <h2 class="section-title reveal" style="margin-bottom: 4rem;">Uncompromising Standards.</h2>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 3rem;">
                <div class="reveal">
                    <div style="width: 50px; height: 50px; border-radius: 12px; background: rgba(229,150,0,0.1); display: flex; align-items: center; justify-content: center; color: var(--accent); margin-bottom: 1.5rem;"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
                    <h3 style="font-size: 1.5rem; margin-bottom: 1rem;">Export Grade Purity</h3>
                    <p style="color: var(--text-muted); line-height: 1.6;">Our facility strictly adheres to international export regulations, ensuring every batch of turmeric is completely adulteration-free and features an optimal curcuminoid profile.</p>
                </div>
                <div class="reveal" style="transition-delay: 0.1s;">
                    <div style="width: 50px; height: 50px; border-radius: 12px; background: rgba(229,150,0,0.1); display: flex; align-items: center; justify-content: center; color: var(--accent); margin-bottom: 1.5rem;"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
                    <h3 style="font-size: 1.5rem; margin-bottom: 1rem;">100% Traceable</h3>
                    <p style="color: var(--text-muted); line-height: 1.6;">Sourced directly from verified farmers in the Sangli and Krishna River basins. We maintain an unbroken chain of custody from the farm gate to the shipping container.</p>
                </div>
                <div class="reveal" style="transition-delay: 0.2s;">
                    <div style="width: 50px; height: 50px; border-radius: 12px; background: rgba(229,150,0,0.1); display: flex; align-items: center; justify-content: center; color: var(--accent); margin-bottom: 1.5rem;"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div>
                    <h3 style="font-size: 1.5rem; margin-bottom: 1rem;">Massive Scale</h3>
                    <p style="color: var(--text-muted); line-height: 1.6;">With an annual output capacity exceeding 12,000 MT, we are equipped to rapidly fulfill even the most demanding global wholesale contracts without bottlenecking.</p>
                </div>
            </div>
        </div>
    </section>
'''

# Create About Us
about = '''
    <!-- About Us -->
    <section id="about" style="padding: 8vw 0; background: #FFF; border-top: 1px solid var(--card-border);">
        <div class="container">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center;">
                <div class="reveal">
                    <div class="step-num" style="margin-bottom: 1rem;">OUR STORY</div>
                    <h2 style="font-size: 3rem; margin-bottom: 1.5rem; letter-spacing: -0.02em;">About Us</h2>
                    <p style="color: var(--text-muted); font-size: 1.15rem; line-height: 1.8; margin-bottom: 1.5rem;">Led by a deep-rooted commitment to quality and transparency, Sudha Mahesh Thakkar operates one of the most advanced turmeric processing units in the Sangli region.</p>
                    <p style="color: var(--text-muted); font-size: 1.15rem; line-height: 1.8;">Our vision is simple: to bridge the gap between traditional agricultural sourcing and modern, high-tech B2B processing, ensuring the world gets nothing but the absolute best turmeric.</p>
                </div>
                <div class="reveal">
                    <div style="background: var(--bg); border-radius: 24px; padding: 3rem; border: 1px solid var(--card-border); position: relative; overflow: hidden;">
                        <div style="position: absolute; top:-50px; right:-50px; width: 150px; height: 150px; background: rgba(229,150,0,0.1); border-radius: 50%; filter: blur(30px);"></div>
                        <h3 style="font-size: 1.8rem; margin-bottom: 1rem;">Our Core Values</h3>
                        <ul style="list-style: none; color: var(--text-muted); line-height: 2;">
                            <li style="display: flex; align-items: center; gap: 10px;"><div style="width: 6px; height:6px; background: var(--accent); border-radius: 50%;"></div> Purity Without Compromise</li>
                            <li style="display: flex; align-items: center; gap: 10px;"><div style="width: 6px; height:6px; background: var(--accent); border-radius: 50%;"></div> Farmer-First Procurement</li>
                            <li style="display: flex; align-items: center; gap: 10px;"><div style="width: 6px; height:6px; background: var(--accent); border-radius: 50%;"></div> Technological Excellence</li>
                            <li style="display: flex; align-items: center; gap: 10px;"><div style="width: 6px; height:6px; background: var(--accent); border-radius: 50%;"></div> Global Export Readiness</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
'''

# Modify legacy ID
legacy = legacy.replace('<section class="legacy-section">', '<section id="procurement" class="legacy-section">')

# Modify infrastructure ID
infrastructure = infrastructure.replace('<section id="infrastructure" class="bento-section">', '<section id="processing" class="bento-section">')
infrastructure = infrastructure.replace('<h2 class="section-title reveal">Infrastructure Matrix</h2>', '<h2 class="section-title reveal">Processing & Storage Matrix</h2>')

# Modify map section ID
contact = contact.replace('<section id="sourcing" class="map-section">', '<section id="contact-map" class="map-section">')

# Reassemble
top_part = html[:html.find('<!-- Hero -->')]
top_part = top_part[:nav_start] + new_nav + top_part[nav_end:]

body = top_part + hero + marquee + why_us + legacy + pipeline + infrastructure + gallery + about + contact + '</body>\n</html>'

with open('/Users/tejjo/Desktop/websites/sudha-mahesh-thakkar/index.html', 'w') as f:
    f.write(body)

