const BASE_URL =
  process.env.NEXT_PUBLIC_ASSET_URL ?? 'http://localhost:8055/assets'

export default function getImageURL(imageID?: string, transorm?: string) {
  return imageID ? `${BASE_URL}/${imageID}?quality=80&${transorm}` : undefined
}
