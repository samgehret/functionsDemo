import 'segment-typescript-definitions/common'
import 'segment-typescript-definitions/custom-source'

export async function onRequest(request:SegmentSourceRequest, settings:SegmentSettings) {
  console.log(request)
  let a = 0
  if (a == 0) {
    Segment.track({
      event: 'Page Viewed',
      properties: {
        page_name: 'my_page'
      },
      userId: 'christy'
    })
  }
}