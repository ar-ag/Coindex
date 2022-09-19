# Coindex
<h2>Crypto Currency Price Fetch in CLI</h2>

<p>A command line interface application to display the price of a specific crypto-currency.</p>

<hr>
<h3> Prerequisites </h3>
<p> An API key from https://www.coinapi.io/pricing?apikey </p>

<hr>
<h3> Setting an API key </h3>
 <p> Use <code>coindex key set</code> to set the API key</p>
 <p> Use <code>coindex key show</code> to see the API key</p>
 <p> Use <code>coindex key remove</code> to remove the API key</p>
 
 <hr>
 <h3> Checking the price of a crypto coin </h3>
 <p> Use <code>coindex check price --coin BTC --curr INR</code> to check the price of Bitcoin in EURO; to check for any other coin use the coin's code in place of BTC
 and to change currency use the currency code in place of INR</p>
 
 
![Screenshot (21)](https://user-images.githubusercontent.com/96348217/191071829-2bf5bcdc-b09d-4918-baa7-7158cce27225.png)
<fn>Please ignore the Experimental Warning which occurs due to use of ES-6 module for importing JSON files </fn>
