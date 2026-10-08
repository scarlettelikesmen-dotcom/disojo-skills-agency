import re

with open('index.html', 'r') as f:
    html = f.read()

# Pointer 1 & 2: Yellow pill
pill_html = """
    <!-- Top Scrolling Pill (Pointer 1 & 2) -->
    <div style="background: var(--accent); padding: 0.5rem 0; overflow: hidden; border-bottom: 1px solid rgba(0,0,0,0.05); border-top: 1px solid rgba(0,0,0,0.05);">
        <div class="marquee-content-right" style="animation: scroll-right 30s linear infinite; display: flex; white-space: nowrap; font-family: 'Space Grotesk', sans-serif; font-weight: 700; letter-spacing: 2px; color: var(--text-main); font-size: 0.9rem;">
            <div class="marquee-item">sudha mahesh thakker.est.2000</div>
            <span style="margin: 0 2rem;">•</span>
            <div class="marquee-item">sudha mahesh thakker.est.2000</div>
            <span style="margin: 0 2rem;">•</span>
            <div class="marquee-item">sudha mahesh thakker.est.2000</div>
            <span style="margin: 0 2rem;">•</span>
            <div class="marquee-item">sudha mahesh thakker.est.2000</div>
            <span style="margin: 0 2rem;">•</span>
            <div class="marquee-item">sudha mahesh thakker.est.2000</div>
            <span style="margin: 0 2rem;">•</span>
            <div class="marquee-item">sudha mahesh thakker.est.2000</div>
        </div>
    </div>
    <style>
        @keyframes scroll-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
        }
    </style>
"""
html = html.replace('</nav>', '</nav>\n' + pill_html)

# Pointer 3 & 13: Remove 05 / SOURCING LEGACY
html = re.sub(r'<!-- Legacy Editorial Section.*?</section>', '', html, flags=re.DOTALL)

# Pointer 4: Hero Background
html = html.replace('<section class="hero">', '<section class="hero" style="background-image: url(\'assets/media__1781634450084.jpg\'); background-size: cover; background-position: center; position: relative;">\n        <div style="position: absolute; inset: 0; background: rgba(0,0,0,0.6); z-index: 0;"></div>')
html = html.replace('<div class="hero-content">', '<div class="hero-content" style="position: relative; z-index: 1;">')
html = html.replace('<div class="hero-images">', '<div class="hero-images" style="display: none;">')

# Pointer 5: Explore Facility -> WHY US
html = html.replace('>Explore Facility</a>', '>WHY US</a>')
html = html.replace('href="#gallery"', 'href="#why-us"')

# Pointer 6: Marquee text
new_marquee = "7000mt polish whole turmeric and 5000mt powder turmeric"
marquee_inner = f"""
            <div class="marquee-item">{new_marquee}</div>
            <span style="margin: 0 2rem;">•</span>
            <div class="marquee-item">{new_marquee}</div>
            <span style="margin: 0 2rem;">•</span>
            <div class="marquee-item">{new_marquee}</div>
"""
html = re.sub(r'(<div class="marquee-content"[^>]*>).*?(</div>)', r'\g<1>' + marquee_inner + r'\2', html, flags=re.DOTALL)

# Pointer 7: Remove 01 / KEY PILLARS
html = re.sub(r'<div class="step-num reveal" style="margin-bottom: 1rem;">01 / KEY PILLARS</div>', '', html)

# Pointer 8: Direct Procurement -> directly from farmer.
html = html.replace('Direct Procurement', 'directly from farmer.')

# Pointer 9: Storage Capacity -> massive storage facility
html = html.replace('Storage Capacity', 'massive storage facility')

# Pointer 10: Modern Infrastructure -> modern processing plant
html = html.replace('Modern Infrastructure', 'modern processing plant')

# Pointer 11: 20+ Years -> 25+ years
html = html.replace('20+ Years', '25+ years')

# Pointer 12: Add Contact Us banner in gap
contact_banner = """
    <div class="container" style="margin-bottom: 4rem;">
        <div style="background: var(--dark); border-radius: 20px; padding: 4rem; text-align: center; color: var(--bg);">
            <h2 style="font-size: 2.5rem; margin-bottom: 1.5rem; color: var(--bg);">Ready to Source?</h2>
            <p style="font-size: 1.1rem; color: rgba(255,255,255,0.7); margin-bottom: 2rem;">Get in touch with our sourcing experts today.</p>
            <a href="#contact" class="btn-magic light magnetic" style="color: var(--dark); background: var(--bg);">Contact Us</a>
        </div>
    </div>
"""
# Insert before Pipeline Section since Legacy Editorial Section was removed
html = html.replace('<!-- Pipeline Section -->', contact_banner + '\n    <!-- Pipeline Section -->')

# Pointer 13: Remove Continuous Production Flow
html = html.replace('<h2 class="section-title reveal">Continuous Production Flow</h2>', '')

# Pointer 14: Add Contact Us card next to pipeline
grid_wrapper_open = """
            <div style="display: grid; grid-template-columns: 1fr 350px; gap: 4rem; align-items: start;">
                <div class="pipeline-wrapper" style="margin-top: 0;">
"""
html = html.replace('<div class="pipeline-wrapper">', grid_wrapper_open)
contact_sticky = """
                </div>
                <div style="position: sticky; top: 120px; background: var(--bg-card); border-radius: 20px; padding: 2rem; border: 1px solid rgba(0,0,0,0.05);">
                    <h3 style="font-size: 1.5rem; margin-bottom: 1rem;">Need customized processing?</h3>
                    <p style="color: var(--text-muted); margin-bottom: 1.5rem; line-height: 1.6;">Our facility can accommodate specific grading and polishing requests.</p>
                    <a href="#contact" class="btn-magic dark magnetic" style="width: 100%; text-align: center;">Contact Us</a>
                </div>
            </div>
"""
html = html.replace('            </div>\n        </div>\n    </section>', contact_sticky + '        </div>\n    </section>', 1)

# Pointer 15: 1000 MT -> 2000 mt
html = html.replace('1000 MT moisture-free depot', '2000 mt moisture-free depot')

# Pointer 16: Matrix 1,000 MT -> 2000 MT + Contact Us
matrix_old = """<div class="bento-box bento-small">
                    <h3 style="font-size: 3rem; margin-bottom: 0.5rem; color: var(--accent);">1,000 MT</h3>
                    <p style="font-weight: 600;">Cold Storage</p>
                </div>"""
matrix_new = """<div class="bento-box bento-small" style="display: flex; flex-direction: column; justify-content: space-between;">
                    <div>
                        <h3 style="font-size: 3rem; margin-bottom: 0.5rem; color: var(--accent);">2000 MT</h3>
                        <p style="font-weight: 600;">Cold Storage</p>
                    </div>
                    <a href="#contact" class="btn-magic dark magnetic" style="margin-top: 1rem; padding: 0.5rem 1rem; font-size: 0.9rem;">Contact Us</a>
                </div>"""
html = html.replace(matrix_old, matrix_new)

# Pointer 17: Replace Logistics Map with Contact Form
contact_form_html = """
    <!-- Contact Form Section -->
    <section id="contact" style="padding: 8rem 0; background: var(--dark); color: var(--bg);">
        <div class="container">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4rem;">
                <div>
                    <h2 style="font-size: 3.5rem; margin-bottom: 1.5rem; color: var(--bg);">Get in Touch</h2>
                    <p style="font-size: 1.1rem; color: rgba(255,255,255,0.7); margin-bottom: 2rem;">Ready to source the highest quality turmeric from Sangli? Reach out to our team.</p>
                    <div style="margin-bottom: 1rem;"><strong style="color: var(--accent);">Email:</strong> info@sudhamahesh.com</div>
                    <div style="margin-bottom: 1rem;"><strong style="color: var(--accent);">Phone:</strong> +91 98765 43210</div>
                    <div><strong style="color: var(--accent);">Location:</strong> Sangli Turmeric Hub, Maharashtra, India</div>
                </div>
                <form style="display: flex; flex-direction: column; gap: 1.5rem;">
                    <input type="text" placeholder="Your Name" style="padding: 1rem; border-radius: 10px; border: none; background: rgba(255,255,255,0.1); color: var(--bg); font-family: inherit;">
                    <input type="email" placeholder="Your Email" style="padding: 1rem; border-radius: 10px; border: none; background: rgba(255,255,255,0.1); color: var(--bg); font-family: inherit;">
                    <textarea placeholder="Your Message" rows="5" style="padding: 1rem; border-radius: 10px; border: none; background: rgba(255,255,255,0.1); color: var(--bg); font-family: inherit; resize: vertical;"></textarea>
                    <button type="submit" class="btn-magic light magnetic" style="color: var(--dark); background: var(--bg); border: none; cursor: pointer; padding: 1rem; font-family: inherit; font-weight: 700;">Send Message</button>
                </form>
            </div>
        </div>
    </section>
"""
html = re.sub(r'<!-- Logistics Section -->.*?</section>', contact_form_html, html, flags=re.DOTALL)

# Pointer 18: Products section under Why Us
products_html = """
    <!-- Products Catalog Section -->
    <section id="products" style="padding: 6rem 0; background: var(--bg-card);">
        <div class="container">
            <h2 class="section-title reveal" style="text-align: center; margin-bottom: 4rem;">Our Catalog: Premium Turmeric Products</h2>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
                <div style="background: var(--bg); border-radius: 20px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.05); transition: transform 0.3s ease;" onmouseover="this.style.transform='translateY(-10px)'" onmouseout="this.style.transform='none'">
                    <img src="assets/client_powder.png" alt="Turmeric Powder" style="width: 100%; height: 300px; object-fit: cover;">
                    <div style="padding: 1.5rem; text-align: center;">
                        <h3 style="font-size: 1.25rem; font-weight: 700;">Turmeric Powder</h3>
                    </div>
                </div>
                <div style="background: var(--bg); border-radius: 20px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.05); transition: transform 0.3s ease;" onmouseover="this.style.transform='translateY(-10px)'" onmouseout="this.style.transform='none'">
                    <img src="assets/client_finger.png" alt="Turmeric Finger" style="width: 100%; height: 300px; object-fit: cover;">
                    <div style="padding: 1.5rem; text-align: center;">
                        <h3 style="font-size: 1.25rem; font-weight: 700;">Turmeric Finger</h3>
                    </div>
                </div>
                <div style="background: var(--bg); border-radius: 20px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.05); transition: transform 0.3s ease;" onmouseover="this.style.transform='translateY(-10px)'" onmouseout="this.style.transform='none'">
                    <img src="assets/client_bulbs.png" alt="Turmeric Bulbs" style="width: 100%; height: 300px; object-fit: cover;">
                    <div style="padding: 1.5rem; text-align: center;">
                        <h3 style="font-size: 1.25rem; font-weight: 700;">Turmeric Bulbs</h3>
                    </div>
                </div>
                <div style="background: var(--bg); border-radius: 20px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.05); transition: transform 0.3s ease;" onmouseover="this.style.transform='translateY(-10px)'" onmouseout="this.style.transform='none'">
                    <img src="assets/client_powder_curcumin.png" alt="Curcumin Powder" style="width: 100%; height: 300px; object-fit: cover;">
                    <div style="padding: 1.5rem; text-align: center;">
                        <h3 style="font-size: 1.25rem; font-weight: 700;">Curcumin Powder</h3>
                    </div>
                </div>
                <div style="background: var(--bg); border-radius: 20px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.05); transition: transform 0.3s ease;" onmouseover="this.style.transform='translateY(-10px)'" onmouseout="this.style.transform='none'">
                    <img src="assets/client_finger_high_curcumin.png" alt="Finger High Curcumin" style="width: 100%; height: 300px; object-fit: cover;">
                    <div style="padding: 1.5rem; text-align: center;">
                        <h3 style="font-size: 1.25rem; font-weight: 700;">Finger High Curcumin</h3>
                    </div>
                </div>
                <div style="background: var(--bg); border-radius: 20px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.05); transition: transform 0.3s ease;" onmouseover="this.style.transform='translateY(-10px)'" onmouseout="this.style.transform='none'">
                    <img src="assets/client_internal_closeup.png" alt="Internal Closeup" style="width: 100%; height: 300px; object-fit: cover;">
                    <div style="padding: 1.5rem; text-align: center;">
                        <h3 style="font-size: 1.25rem; font-weight: 700;">Internal Closeup</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
"""
html = html.replace('<!-- Marquee Section -->', products_html + '\n    <!-- Marquee Section -->')

with open('index.html', 'w') as f:
    f.write(html)
