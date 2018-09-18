import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, UrlSegment } from '@angular/router';

@Component({
  selector: 'mode-bar',
  templateUrl: './mode-bar.component.html',
  styleUrls: ['./mode-bar.component.css']
})
export class ModeBarComponent implements OnInit {
  /**
   * モードのリスト
   * 
   * @memberof ModeBarComponent
   */
  modes = [
    {
      icon: "smartphone",
      path: "design"
    },
    {
      icon: "code",
      path: "block"
    }
  ]
  /**
   * 現在のモード
   * 
   * @memberof ModeBarComponent
   */
  currentSelectedMode:string = "design"

  constructor(private router: Router, private route:ActivatedRoute) { }

  ngOnInit() {

    let child = this.route.children[0]
    child.url.subscribe((data) => {
      this.currentSelectedMode = data[0].path
    })
    
  }

  /**
   * モードを遷移
   * 
   * @param {string} path 
   * @memberof ModeBarComponent
   */
  navigate (path:string) {
    
    this.router.navigate(["editor", this.route.snapshot.params.projectId ,{outlets: {"editor": [path]}}]);
    this.currentSelectedMode = path
  }

}
