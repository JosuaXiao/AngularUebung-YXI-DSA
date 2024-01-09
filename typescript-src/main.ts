const liste = document.getElementById('hier');

interface Answer {
  userid: number;
  id: number;
  title: string;
  body: string;
}

interface AnswerService {
  post: Answer;
  loadPost(): void;
}

class ListenPunkte {
  private inhalt?: string;
  constructor() {
    console.log('das bojekt', this);
  }

  getPromise() {
    fetch('https://jsonplaceholder.typicode.com/posts').then((response) => {
      response.json().then((result) => {
        result.forEach(this.createLi(result));
      });
    });
  }

  createLi(data: any) {
    var item = document.createElement('li');
    item.innerHTML = data.title;
    liste?.append(item);
  }
}

const L = new ListenPunkte();
L.getPromise;
