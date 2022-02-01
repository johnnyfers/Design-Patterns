import { ReportBody } from "./ReportBody";
import { ReportFooter } from "./ReportFooter";
import { ReportHeader } from "./ReportHeader";

export class Report {
    header: ReportHeader
    body: ReportBody
    footer: ReportFooter

    constructor() {

    }

    setHeader(header: ReportHeader) {
        this.header = header
    }

    setBody(body: ReportBody) {
        this.body = body
    }

    setFooter(footer: ReportFooter) {
        this.footer = footer
    }

    generate() {
        const html = `<div>${this.header.value}</div><div>${this.body.value}</div><div>${this.footer.value}</div>`
        return html
    }
}