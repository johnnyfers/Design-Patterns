// facade
import { ReportFacade } from "../src/structural/facade/ReportFacade"

test('should be able to generate a report', () => {
    const reportFacade = new ReportFacade('h','b', 'f')
    const html = reportFacade.generate()
    expect(html).toBe('<div>h</div><div>b</div><div>f</div>')
})