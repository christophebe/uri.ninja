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

            //Difficult to manage this case as an error (domain = www, tld = google)
            assert(URI.domain("http://www.google") == "www.google");

            assert(URI.domainName("http://google.com") === "google");
            assert(URI.domainName("ddlklkl") === "");
            assert(URI.domainName("http://") === "");
            assert(URI.domainName("http://test") === "");

            assert(URI.isValidDomain("http://google.com"));
            assert(URI.isValidDomain("http://www.google.com"));


            assert(URI.isValidDomain("http://www.google")); 
            assert(! URI.isValidDomain("google.com")); // url parsing is incorrect without protocol
            assert(! URI.isValidDomain("ddlklkl"));
            assert(! URI.isValidDomain("http://"));

            assert(! URI.isValidDomain("http://test"));

            assert(URI.suffix("http://google.com/test.pdf") === "pdf");
            assert(URI.suffix("http://google.com/test") === "");

            assert(URI.host("http://google.com") === "google.com");
            assert(URI.host("http://www.google.com") === "www.google.com");
            assert(URI.host("ddlklkl") === "");
            assert(URI.host("http://") === "");
            assert(URI.host("http://test") === "test");


            done();
        });



});
