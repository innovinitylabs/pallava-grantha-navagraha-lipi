# Security Policy

## Supported Versions

| Version | Supported |
|---------|-----------|
| 0.1.x   | ✅ Current |

## Reporting a Vulnerability

The Nava Graha Lipi project takes security seriously. If you discover a security vulnerability, please report it responsibly.

### How to Report

**Do not open a public GitHub issue for security vulnerabilities.**

Instead, please report vulnerabilities by emailing the project maintainers directly. If a security contact email is listed in the repository metadata, use that address. Otherwise, contact the repository owner through GitHub's private vulnerability reporting feature.

### What to Include

When reporting a vulnerability, please include:

1. **Description** — a clear description of the vulnerability
2. **Steps to reproduce** — detailed steps to reproduce the issue
3. **Impact assessment** — your assessment of the potential impact
4. **Affected versions** — which version(s) of the project are affected
5. **Suggested fix** — if you have one, though this is not required

### What to Expect

- **Acknowledgement** — we will acknowledge receipt of your report within 48 hours
- **Assessment** — we will assess the vulnerability and its impact within 7 days
- **Resolution** — we aim to resolve confirmed vulnerabilities within 30 days, depending on complexity
- **Credit** — with your permission, we will credit you in the security advisory

### Scope

This security policy covers:

- The Next.js web application source code in this repository
- Build scripts and tooling
- Database schema and data handling
- Any server-side API routes

This policy does not cover:

- Third-party dependencies (please report those to the respective projects)
- The deployed instance infrastructure (if any)
- Font files (which are static assets without executable code)
- SVG glyph files (though SVG injection vulnerabilities in our rendering code are in scope)

## Security Considerations

### SVG Handling

This project renders user-contributed SVG files. Our SVG pipeline sanitises input to prevent:

- Embedded JavaScript execution
- External entity references (XXE)
- CSS-based data exfiltration
- Malformed SVG that could crash renderers

If you discover a way to bypass these protections, please report it.

### Database

The project uses SQLite for local data storage. The database contains research metadata and attestation records — no user credentials or personal information. Nevertheless, SQL injection and path traversal vulnerabilities should be reported.

### Dependencies

We monitor dependencies for known vulnerabilities. If you notice an outdated or vulnerable dependency, please open a regular issue (not a security report) unless the vulnerability is actively exploitable in our specific usage.

## Disclosure Policy

We follow a coordinated disclosure process:

1. Reporter submits vulnerability privately
2. We confirm and assess the issue
3. We develop and test a fix
4. We release the fix and publish a security advisory
5. Reporter is credited (with their consent)

We ask reporters to allow us reasonable time to address vulnerabilities before any public disclosure.
