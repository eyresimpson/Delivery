function ipFilter(ip: string): string {
    switch (ip) {
        case "::1": return "localhost";break;
        case "::ffff:127.0.0.1": return "localhost/代理";break;
        
    }
    return ip;
}

export { ipFilter }