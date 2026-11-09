import json, os, io, base64, html
from PIL import Image, ImageStat

here = os.path.dirname(os.path.abspath(__file__))
r = json.load(open(os.path.join(here, 'results.json'))) + json.load(open(os.path.join(here, 'aw-results.json')))
def find(key):
    if key.startswith('ap:'):
        slug, url = key[3:].split('|')
        return {'slug': 'ap_' + slug, 'site': url, 'finalUrl': url}
    m = [x for x in r if key in x['site'] and os.path.exists(os.path.join(here, 'shots', x['slug'] + '-1.jpg'))]
    if not m: raise SystemExit('missing ' + key)
    return m[0]

SD, SM, HM, MINE, AG, LI = 'Awwwards Site of the Day', 'Awwwards Site of the Month', 'Awwwards Honorable Mention', 'My pick', 'Site of the Day, per its agency', 'Listed on Awwwards'

T = [
 ('Person', 'The buyer must see the face and hear the voice.', 'Awwwards has only Honorable Mentions here. Its Person winners are nearly all designers showing their own portfolios, so the well-known names below are my picks.', [
  ('raycorral', 'Ray Corral', HM, 'Name fills the screen, portrait cut out and breaking through the letters.'),
  ('kasiasiwosz', 'Kasia Siwosz', HM, 'Coach. One black and white portrait, a blunt line set huge behind it, then long plain sentences in the first person.'),
  ('brenebrown', 'Brené Brown', MINE, 'Real photo of them in their own place. Two words say what they do.'),
  ('jamesclear', 'James Clear', MINE, 'Almost no design: one sentence and a free chapter. The opposite end of the range.'),
  ('justinwelsh', 'Justin Welsh', MINE, 'One promise, an email box, and quotes from named authors.'),
  ('melrobbins', 'Mel Robbins', MINE, 'Portrait with a press quote as the headline. The pop-up is the part to avoid.'),
  ('aliabdaal', 'Ali Abdaal', MINE, 'Written like a hello from one person. Warm and casual, the creator end of this type.'),
  ('sahilbloom', 'Sahil Bloom', MINE, 'Name over a dark portrait, with the book pinned along the top.'),
  ('ap:kotler|https://www.stevenkotler.com/', 'Steven Kotler', HM, 'Huge low-angle face with the name across the bottom, then long plain reading. Hide the pop-up, keep the rest.'),
 ]),
 ('Catalogue', 'The buyer must see the range.', 'Awwwards winners here lean to small ranges. The big, working catalogues are my picks.', [
  ('hay.com', 'HAY', MINE, 'Product photo does the whole first screen, no sales line at all.'),
  ('teenage.engineering', 'Teenage Engineering', MINE, 'The menu itself is drawn as little product icons. Object on black under it.'),
  ('flos.com', 'Flos', MINE, 'Names the actual products on the first screen and splits private and professional buyers.'),
  ('usm.com', 'USM', MINE, 'Modular furniture, led by a real room and "design your own".'),
  ('ekomia', 'Ekomia', LI, 'Furniture shop with filters, materials and maker pages. Has a 3D configurator.'),
  ('moo.com', 'MOO', MINE, 'Closest to a print shop: real printed pieces, delivery and review proof up front.'),
  ('papier.com', 'Papier', MINE, 'Stationery range, led by one seasonal product with the categories right below.'),
  ('casefurniture', 'Case Furniture', HM, 'Straight shop structure: new product, then collections.'),
  ('gufram.it', 'Gufram', SD, 'Objects scattered on white, with a Space or Grid switch for browsing the whole range.'),
  ('kozowood', 'Kōzōwood', SD, 'Timber maker. The material itself fills the screen.'),
  ('halcyon', 'Halcyon Lighting', HM, 'Architectural lighting shown lit, in real buildings.'),
  ('p448', 'P448', SD, 'Shoe range, product on a body in two big photos.'),
  ('monolith.nyc', 'Monolith', SD, 'Furniture maker. Massive wordmark, with a Trade link in the main menu.'),
  ('zetr', 'ZETR', SD, 'Architectural hardware with Components, Projects and Buy in the menu.'),
 ]),
 ('Software', 'The buyer must see it working.', 'Most Awwwards winners here are showpieces with little of the real product visible. The real-screen sites are my picks. Our rule stays real screens and no 3D.', [
  ('linear.app', 'Linear', MINE, 'Real product screen on the first view, nothing decorative around it.'),
  ('attio.com', 'Attio', MINE, 'Live-looking product conversation under a short line.'),
  ('cursor.com', 'Cursor', MINE, 'The actual app, set over a painted landscape.'),
  ('granola.ai', 'Granola', MINE, 'Real notes beside a call. Shows exactly the moment it is used.'),
  ('flim.ai', 'Flim', SD, 'The search box and its real results are the page.'),
  ('contra.com', 'Contra Calculator', SD, 'A working calculator as the page. Its 3D device breaks our no-3D rule, so study the calculator only.'),
  ('grail-app', 'Grail', SD, 'Countdown and phone-free cards tell you what the app does through a story.'),
  ('butter.video', 'Butter', SD, 'Video editor. Big plain line, playful object.'),
  ('heronaiapp', 'Heron AI', SD, 'Engraved illustration instead of the usual app mock-up.'),
 ]),
 ('Local practice', 'The buyer must see the people and the place.', 'Better than I expected on Awwwards, especially dentists and therapists. Academies and classes are mostly Honorable Mentions.', [
  ('aventuradentalarts', 'Aventura Dental Arts', SD, 'Dentist. A real older patient smiling, split against big type.'),
  ('minemal.dental', 'Minemal', HM, 'Dentists shown as two named people, not a clinic.'),
  ('lavadental', 'LAVA Dental', HM, 'Dentist that leads with its landscape, not teeth.'),
  ('twofoldny', 'Twofold Therapy', HM, 'Therapy practice with strange, human photography. First para names who leads it.'),
  ('therapyin.london', 'Therapy in London', HM, 'Opens as an envelope asking what you need help with. A real idea.'),
  ('maximatherapy', 'Maxima Therapy', SD, 'Children\'s therapy drawn for the people who bring their kids.'),
  ('chessgagunashvili', 'Gagunashvili Chess Academy', HM, 'Closest to our Bombay academies. Speaks to parents in loud pink type.'),
  ('surfing.academy', 'Surfing Academy', HM, 'Hand-drawn, one founder\'s voice, trip schedule in the menu.'),
  ('music.yale', 'Yale School of Music', MINE, 'Won a W3 Silver. Three plain words as three tall photographs.'),
  ('alvinailey', 'Alvin Ailey', MINE, 'Dance school and company. One photograph of two hands.'),
  ('dishoom', 'Dishoom', MINE, 'Bombay café restaurants. Opens on a line from the founders with a listen option.'),
  ('delice.ca', 'Délice', HM, 'Pizzeria since 1970. Booking, ordering and gift card sit on the first screen.'),
  ('ap:1million|https://1milliondance.com/', '1Million Dance Studio', MINE, 'Dance studio. The first screen is a class in session, then a blunt line with a drawing. Dancers and class types are the menu.'),
  ('ap:ethos|https://ethosmusicacademy.it/', 'Ethos Music Academy', HM, 'Small music school on a lake. Close-up of a hand on a guitar, courses laid out by who they are for.'),
  ('thirdspace', 'Third Space', MINE, 'Gym that shows the actual room and a person training.'),
  ('setialaw', 'Setia Law', HM, 'Law firm. Plain sentence on what they do, award noted beside it.'),
  ('forthetimes', 'Joseph Law', HM, 'Injury law that opens on real footage of the work.'),
 ]),
 ('Real estate (Product, 3D allowed)', 'The building is the object.', 'This is where Awwwards is strongest. It answers your question on insane visuals: yes, they exist. Most are renders of the unbuilt building, and they need a developer who has those renders.', [
  ('ap:hubtown|https://hubtown.co.in/', 'Hubtown', SD, 'Bombay developer. One glowing cube over water, real-time 3D. Long loader; it took a full minute to appear on my side.'),
  ('silver-pinewood', 'Silver Pinewood', SD, 'Render of the tower against a real city landmark, name set huge.'),
  ('springs.estate', 'Springs', SD, 'Wellness residence, sold through textures and a face, not the building.'),
  ('poklonnaya9', 'Poklonnaya 9', AG, 'Tower sits inside the letters of its own name.'),
  ('era.estate', 'ERA', AG, 'City drawn in gold light. Agency says it has a 3D map and apartment picker.'),
  ('likova', 'Likova', SD, 'Business centre. Agency says the site plan is a 3D place you move through.'),
  ('ever-live-here', 'Ever', AG, 'Own type as identity, rooms shown behind giant words.'),
  ('belgradearbor', 'Belgrade Arbor', SD, 'White model of the building, tree-like facade as the idea.'),
  ('sobha-privy', 'Sobha Privy Collection', SD, 'Abstract black ribbon, map tucked in the corner.'),
  ('era-residence', 'ERA Residence', SM, 'Deep colour, crest and a calm intro. Reads like a private invitation.'),
  ('aircenter', 'AIR', SD, 'Sculptural spiral between the letters of its name.'),
  ('sondaven', 'Son Daven', SM, 'Real architecture in mist, type patterned to match the facade.'),
  ('111w57', '111 West 57', MINE, 'View from inside the apartment is the hero.'),
  ('ap:432|https://www.432parkavenue.com/', '432 Park Avenue', MINE, 'One photograph of the tower and a short paragraph, menu down the side. Barely any design, and it does not need any.'),
 ]),
 ('Product', 'The buyer must see the object.', 'Ciao and Palmo are already on our list. Two here (FS 60P, Aevion) are agency demos of invented products, so judge the craft, not the business.', [
  ('girard-perregaux', 'Girard-Perregaux Casquette', SD, 'Object huge on the first screen, showing the time.'),
  ('lightweight.info', 'Lightweight', SD, 'Carbon wheels drawn as a technical outline, menu built around them.'),
  ('daylightcomputer', 'Daylight', SD, 'Tablet lying on grass in sunlight, which is the product\'s whole argument.'),
  ('ap:santioni|https://santionispirits.com/', 'Santioni Spirits', SD, 'Age check, then an illustrated story you scroll through before the bottles. The brand is the idea.'),
  ('ap:vaulk|https://vaulk.com/', 'Vaulk', SD, 'Modular shelters. Render of the finished building in a garden, then the same thing as a wireframe with its parts named.'),
  ('ap:fauna|https://faunarobotics.com/', 'Fauna Robotics', SD, 'Robots, sold warm. Real people in a real office beside the machine, parts explained in plain cards.'),
  ('ap:thewatch|https://thewatch.60fps.fr/', 'FS 60P', SD, 'Agency demo. Watch sits between the letters of its name, then turns as the specs arrive.'),
  ('ap:drone|https://drone.riotters.com/', 'Aevion', SD, 'Agency demo. Drone on white with its name behind it, then three numbers as it turns.'),
  ('ap:composites|https://www.composites.archi/', 'Composites.archi', SD, 'Campaign for a building material. Huge type and sound first, the material only arrives later.'),
  ('halodental', 'Halo', SD, 'One dark object between the letters. Appears to be a dental device with investors, so it sits here.'),
 ]),
 ('Studio', 'The buyer must see the work.', 'We already have seven here (OH, Mammoth, Supersolid, Backhouse and others). These are possible additions, so cut freely.', [
  ('lpas', 'LPAS', SD, 'Architecture studio, one strong building photo and a plain line about process.'),
  ('kononenko', 'Kononenko Bureau', SD, 'Their own building as the whole first screen.'),
  ('thelinestudio', 'The Line', SM, 'Animation studio. Their own frame fills the page.'),
 ]),
]

def data(path):
    im = Image.open(path).convert('RGB')
    if ImageStat.Stat(im.convert('L')).stddev[0] < 12: return None
    im = im.resize((680, int(680 * im.height / im.width)))
    b = io.BytesIO(); im.save(b, 'JPEG', quality=62, optimize=True)
    return 'data:image/jpeg;base64,' + base64.b64encode(b.getvalue()).decode()

e = html.escape
sections, n = [], 0
for name, q, note, sites in T:
    rows = []
    for key, title, award, line in sites:
        x = find(key); n += 1
        url = x.get('finalUrl') or x['site']
        if not url.startswith('http'): url = 'https://' + url
        host = url.split('//')[1].split('/')[0].replace('www.', '')
        a = data(os.path.join(here, 'shots', x['slug'] + '-1.jpg'))
        p2 = os.path.join(here, 'shots', x['slug'] + '-2.jpg')
        b = data(p2) if os.path.exists(p2) else None
        imgs = ''.join(f'<img src="{s}" alt="{e(title)} {w}" width="680" height="389">' for s, w in ((a, 'first screen'), (b, 'further down')) if s)
        cls = 'shots' if a and b else 'shots one'
        rows.append(f'''<article class="site" data-id="{e(title)}" data-type="{e(name)}">
<div class="{cls}">{imgs}</div>
<div class="info"><h3>{e(title)}</h3><p class="line">{e(line)}</p><p class="meta"><a href="{e(url)}" target="_blank" rel="noopener">{e(host)}</a><span>{e(award)}</span></p><button type="button" class="cut" aria-pressed="false">Cut</button></div>
</article>''')
    sections.append(f'''<section><header class="type"><h2>{e(name)}</h2><p class="q">{e(q)}</p><p class="note">{e(note)}</p></header>{''.join(rows)}</section>''')

page = open(os.path.join(here, 'shell.html')).read().replace('%%SECTIONS%%', ''.join(sections)).replace('%%N%%', str(n))
open(os.path.join(here, 'site-benchmarks.html'), 'w').write(page)
print(n, 'sites', round(len(page) / 1e6, 1), 'MB')
