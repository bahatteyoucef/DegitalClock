import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-montre-degital',
  templateUrl: './montre-degital.component.html',
  styleUrls: ['./montre-degital.component.css']
})
export class MontreDegitalComponent implements OnInit {

  watch:Observable<number>

  Seconde:number=0;
  Minute:number=0;
  Heure:number=0;

  constructor() 
  {

  }

  ngOnInit() {

    var date = new Date;    

    this.Heure = date.getHours();  
    this.Minute = date.getMinutes();
    this.Seconde = date.getSeconds();

    this.watch = interval(1000);
    
    this.watch.subscribe(
      s => {
        this.Seconde++;

        if(this.Seconde==60)
        {
          this.Seconde=0;
          this.Minute=this.Minute+1;

          if(this.Minute==60)
          {
            this.Minute=0;
            this.Heure=this.Heure+1;

            if(this.Heure==24)
            {
              this.Heure=0;
            }
          }
        }
      }
    );
    
  }

}
