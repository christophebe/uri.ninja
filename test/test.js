var assert = require("assert");
var URI    = require("../index.js");


describe('Test ', function() {

        it('Basic tests', function(done) {


            assert(URI.protocol("http://google.com") === "http");
            assert(URI.protocol("google.com") === "");

            assert(URI.domain("http://google.com") === "google.com");
            assert(URI.domain("http://www.google.com") === "google.com");
            assert(URI.domain("ddlklkl") === "");
            assert(URI.domain("http://") === "");
            assert(URI.domain("http://test") === "");
            assert(URI.domain("http://127.23.45.44/folder/page3.html") === "");
            assert(URI.domain("http://localhost:9999/folder/page3.html") === "");

            //Difficult to manage this case as an error (domain = www, tld = google)
            assert(URI.domain("http://www.google") === "www.google");

            assert(URI.domainName("http://google.com") === "google");
            assert(URI.domainName("http://www.google.com") === "google");
            assert(URI.domainName("ddlklkl") === "");
            assert(URI.domainName("http://") === "");
            assert(URI.domainName("http://test") === "");
            assert(URI.domainName("http://127.23.45.56:9999/folder/page3.html") === "");

            assert(URI.isValidDomain("http://google.com"));
            assert(URI.isValidDomain("http://www.google.com"));
            assert(! URI.isValidDomain("http://test"));

            assert(URI.isValidDomain("http://www.google"));
            assert(! URI.isValidDomain("google.com")); // url parsing is incorrect without protocol
            assert(! URI.isValidDomain("ddlklkl"));
            assert(! URI.isValidDomain("http://"));
            assert(! URI.isValidDomain("http://127.23.45.32:9999/folder/page3.html"));

            assert(URI.suffix("http://google.com/test.pdf") === "pdf");
            assert(URI.suffix("http://google.com/test") === "");

            assert(URI.host("http://google.com") === "google.com");
            assert(URI.host("http://www.google.com") === "www.google.com");
            assert(URI.host("ddlklkl") === "");
            assert(URI.host("http://") === "");
            assert(URI.host("http://test") === "test");
            assert(URI.host("http://localhost:9999/folder/page3.html") === "localhost:9999");
            assert(URI.host("http://127.23.45:9999/folder/page3.html") === "127.23.45:9999");

            assert(URI.origin("http://wwww.domain.com/test.html") === "http://wwww.domain.com");
            assert(URI.origin("http://wwww.domain.com/test/test2.html") === "http://wwww.domain.com");
            assert(URI.origin("http://domain.com/test/test2.html") === "http://domain.com");
            done();
        });



});
