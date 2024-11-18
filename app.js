// by shuffling the array we are certain the the qoute will never be the same
theqoute = document.getElementById('quote');
theouthor = document.getElementById('author');
const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "Hard work beats talent when talent doesn’t work hard. - Tim Notke",
  "You miss 100% of the shots you don’t take. - Wayne Gretzky",
  "Whether you think you can or you think you can’t, you’re right. - Henry Ford",
  "It always seems impossible until it’s done. - Nelson Mandela",
  "Do what you can, with what you have, where you are. - Theodore Roosevelt",
  "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
  "The best way to predict the future is to create it. - Peter Drucker",
  "Act as if what you do makes a difference. It does. - William James",
  "In the middle of every difficulty lies opportunity. - Albert Einstein",
  "Happiness is not something ready made. It comes from your own actions. - Dalai Lama",
  "Don’t wait. The time will never be just right. - Napoleon Hill",
  "The secret of getting ahead is getting started. - Mark Twain",
  "Dream big and dare to fail. - Norman Vaughan",
  "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart. - Roy T. Bennett",
  "If you want to achieve greatness, stop asking for permission. - Anonymous",
  "Opportunities don't happen, you create them. - Chris Grosser",
  "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
  "Don’t let yesterday take up too much of today. - Will Rogers",
  "You can’t use up creativity. The more you use, the more you have. - Maya Angelou",
  "Do one thing every day that scares you. - Eleanor Roosevelt",
  "Great things never come from comfort zones. - Anonymous",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "Push yourself, because no one else is going to do it for you. - Anonymous",
  "The harder you work for something, the greater you’ll feel when you achieve it. - Anonymous",
];


let randomize = (array)=>
{
    for(let y = array.length-1; y > 0; y--)
    {
        let j = Math.floor(Math.random()*y);
        [array[y], array[j]] = [array[j], array[y]];
    }
}

randomize(quotes);
const button = document.querySelector('.container button');


let i = 0;
button.addEventListener('click', () => {
    if(i<quotes.length)
    {
    theqoute.innerHTML = `"${quotes[i].split(" - ")[0]}"`;
    theouthor.innerHTML = `--${quotes[i].split(" - ")[1]}`;
    i++;
    }
    else
    {
        theqoute.innerHTML='you are all cought up for today';
        theouthor.innerHTML='';
    }    
})
