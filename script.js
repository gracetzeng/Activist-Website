/* .js files add interaction to your website */

//fact generator
var factList = [
  "LGBTQ stands for lesbian, gay, bisexual, transgender, queer. But, because there are so many unique identities, that's why there's a '+' after the acronym!",/*0*/
  "Pride month first started when the Stonewall Riots occured in 1969. The police often raided Stonewall Inn, a gay club in NYC, but this time, but this on this particular day, a riot was started. This became a huge turning point in LGBTQ rights history, leading to new LGBTQ organizations and encouraged LGBTQ people to speak up about their oppression.",/*1*/
  "Around 5-10% of the population identifies as LGBTQ+",/*2*/
  "The term 'coming out' refers to an LGBTQ+ person deciding to tell others of their gender or orientation. It is also often called 'coming out of the closet'.",/*3*/
  "Some less commonly known orientations are asexuality and aromanticisim. Being asexual means that you feel little to no sexual attraction, while being aromantic means you feel little to no romantic attraction. They can exist by themselves or together, but they are not the same thing!",/*4*/
  "Transgender refers to someone whose gender does not match with their assigned gender at birth, while cisgender refers to someone whose gender does match."];/*5*/

var fact = document.getElementById("fact");
var myButton = document.getElementById("factButton");
var count = 0;

factButton.addEventListener("click", displayFact);

function displayFact()
{
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length)
  {
    count = 0;
  }
}