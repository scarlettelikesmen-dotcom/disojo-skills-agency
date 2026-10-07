import { brand } from '../brand.config';

// One place that turns the cart into a checkout, switched by brand.checkout.mode.
// 'demo' sells nothing: use it for the free-rebuild demo. Switch to 'shopify' once the client's store is connected.
export function startCheckout(items, total) {
  const { mode, shopifyDomain, whatsapp } = brand.checkout;
  const lines = items.map((i) => `${i.qty} x ${i.name} (${i.currency}${i.price})`);
  const summary = `${lines.join('\n')}\nTotal: ${items[0]?.currency || ''}${total}`;

  if (mode === 'shopify') {
    // Shopify cart permalink: /cart/<numeric variant id>:<qty>,...  (gid://shopify/ProductVariant/123 -> 123)
    const cart = items
      .filter((i) => i.shopifyVariantId)
      .map((i) => `${String(i.shopifyVariantId).split('/').pop()}:${i.qty}`)
      .join(',');
    if (!cart || !shopifyDomain) return { ok: false, reason: 'One or more products are not connected to the store yet.' };
    window.location.href = `https://${shopifyDomain}/cart/${cart}`;
    return { ok: true };
  }
  if (mode === 'whatsapp' && whatsapp) {
    window.location.href = `https://wa.me/${whatsapp}?text=${encodeURIComponent(`Hi, I'd like to order:\n${summary}`)}`;
    return { ok: true };
  }
  if (mode === 'mailto') {
    window.location.href = `mailto:${brand.email}?subject=${encodeURIComponent('Order')}&body=${encodeURIComponent(summary)}`;
    return { ok: true };
  }
  return { ok: false, reason: 'Demo mode: checkout is not connected, so nothing is sold.' };
}
