class LinkTester {
    verifyLink(id, linkContains) {
        expect(id).toBeClickable();
        expect(id).toHaveLinkContaining(linkContains);
    }
}

module.exports = new LinkTester();