// Every fact on the page lives here. Numbers, prices, names and contact details come from the client (confirmed real).
export const CAL_URL = 'https://calendly.com/ascendermedia-in/new-meeting';
export const EMAIL = 'ascendermedia.in@gmail.com';
export const IG_HANDLE = '@ascender_media';
export const IG_URL = 'https://www.instagram.com/ascender_media/';

export const HERO = {
  line: ['Send the footage.', 'We handle the rest.'],
  sub: 'Ascender Media plans, edits and posts short-form video for founders, creators and agencies, on a monthly plan.',
};

// Screenshots of real chats. Names and screenshots are used with the clients' permission (confirmed by the client).
export const CHATS = [
  { id: 'jaylen', name: 'Jaylen', src: '/img/chat-jaylen.webp', w: 764, h: 960, alt: 'Chat with Jaylen: the team ended up handling their entire content pipeline, from scripting and editing to posting and strategy, and it feels like an in-house content team.' },
  { id: 'nasir', name: 'Nasir', src: '/img/chat-nasir.webp', w: 960, h: 766, alt: 'Chat with Nasir: after trying several agencies, they no longer feel they have to manage the team; they send what is needed and everything else is handled.' },
  { id: 'beckett', name: 'Beckett', src: '/img/chat-beckett.webp', w: 960, h: 805, alt: 'Chat with Beckett: shown a reference, he says it is exactly what they need and that he is excited to do business after hearing only good things.' },
  { id: 'amrou', name: 'Amrou', src: '/img/chat-amrou.webp', w: 895, h: 960, alt: 'Chat with Amrou: he liked how prepared the team was, could see the quality in the portfolio, does not mind the price and says changes are made quickly.' },
  { id: 'dillon', name: 'Dillon', src: '/img/chat-dillon.webp', w: 770, h: 960, alt: 'Chat with Dillon: he did not expect an agency to care this much; every edit feels intentional and the team brings ideas.' },
  { id: 'anna', name: 'Anna', src: '/img/chat-anna.webp', w: 890, h: 960, alt: 'Chat with Anna: she liked that the team was prepared, easy to talk to and showed a folder of previous work, which gave her trust.' },
];

// Service wording is the client's own (from the previous site), kept verbatim.
export const MONTH = [
  { verb: 'Plan', body: 'We map content pillars, weekly topics, hook angles and simple CTAs so every post has a job.' },
  { verb: 'Edit', body: 'We turn raw footage into sharp reels, shorts, subtitles, captions and carousel ideas.' },
  { verb: 'Post', body: 'We help you build a repeatable rhythm: what to film, what to post, what to test and what to double down on.' },
];

export const PLANS = [
  { id: 'starter', name: 'Starter', price: '1,300', who: 'For founders and brands starting consistent short-form content.', specs: [['Videos a month', '20-30'], ['Turnaround', '3-5 days'], ['Revisions', '2 rounds'], ['Support', 'Email']], includes: ['Captions and platform formatting', 'Monthly content planning', 'Email support'], best: 'Solo founders, coaches and local brands building consistency.' },
  { id: 'growth', name: 'Growth', price: '3,500', popular: true, who: 'For agencies and brands scaling fast.', specs: [['Videos a month', '60-70'], ['Turnaround', '2-3 days'], ['Revisions', '3 rounds'], ['Support', 'Slack and email']], includes: ['Dedicated editor', 'Motion graphics included', 'Slack and email support', 'Monthly strategy call'], best: 'Growing agencies adding new clients monthly.' },
  { id: 'scale', name: 'Scale', price: '6,000', who: 'For high-volume agencies and teams that need speed.', specs: [['Videos a month', '90-100+'], ['Turnaround', '24-48 hours'], ['Revisions', 'Unlimited'], ['Support', 'Priority']], includes: ['Dedicated editing team', 'Advanced motion graphics', 'Priority support', 'Weekly strategy calls', 'Custom workflow'], best: 'Large agencies doing 80+ videos per month.' },
];

export const START = [
  ['A free 30-minute call.', 'We look at your current content, your offer and what a realistic growth system could look like.'],
  ['Pick a plan.', 'Starter, Growth or Scale, priced per month in US dollars.'],
  ['Send footage.', 'We plan, edit and package it. You approve and post, or we help you post.'],
];
