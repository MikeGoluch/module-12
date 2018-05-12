var url = "https://restcountries.eu/rest/v1/name/";
var flagurl = "http://img.geonames.org/flags/x/";
var prefix = "https://cors-anywhere.herokuapp.com/";
var countriesTableList = $("#countries-table-list");

$("#search").click(searchCountries);

function searchCountries() {
    var countryName = $("#country-name").val();
    if (!countryName.length) {
        countryName = "Poland";
    }
    $.ajax({
        url: url + countryName,
        method: "GET",
        success: function(resp) {
            showCountriesList(resp);
        }
    });
}


function showCountriesList(resp) {
    countriesTableList.empty();
    resp.forEach(function(item) {
        $("<tr>").addClass("test").appendTo(countriesTableList);
        $("<th>").addClass("flag-logo").appendTo(".test");
        $("<th>").text(item.name.toUpperCase()).appendTo(".test");
        $("<img>").attr("src", flagurl + item.alpha2Code.toLowerCase() + ".gif").appendTo(".flag-logo");
        
        $("<tr>").addClass("background-info").appendTo(countriesTableList);
        $("<td>").attr("colspan", 2).text("Background Information: ").appendTo(".background-info");

        $("<tr>").addClass("capital").appendTo(countriesTableList);
        $("<td>").text("Capital: ").appendTo(".capital");
        $("<td>").text(item.capital).appendTo(".capital");

        $("<tr>").addClass("area").appendTo(countriesTableList);
        $("<td>").text("Land area: ").appendTo(".area");
        $("<td>").text(item.area).appendTo(".area");

        $("<tr>").addClass("population").appendTo(countriesTableList);
        $("<td>").text("Population: ").appendTo(".population");
        $("<td>").text(item.population).appendTo(".population");

        $("<tr>").addClass("language").appendTo(countriesTableList);
        $("<td>").text("Language(s): ").appendTo(".language");
        $("<td>").text(item.languages).appendTo(".language");

        $("<tr>").addClass("currency").appendTo(countriesTableList);
        $("<td>").text("Currency: ").appendTo(".currency");
        $("<td>").text(item.currencies).appendTo(".currency");
    });
  }