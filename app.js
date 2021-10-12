
let diceArr = [];
let container = document.getElementById("container");
class Die {
    constructor() {
        this.value = Math.floor(Math.random() * 6) + 1;
        this.die = document.createElement("div");
        this.die.className = "die";
        this.die.innerText = this.value;
        this.roll()
        container.appendChild(this.die);
        // this.die.addEventListener("mouseover", () => {
        //     this.die.appendChild(this.value);
        // });
        // this.die.addEventListener("mouseout", () => {
        //     this.die.removeChild(this.value);
        // });
        this.die.addEventListener("dblclick", () => {
            if (this.die.id % 2 === 0) {
                if (this.die.nextSibling === null) {
                    console.log();
                } else {
                    container.removeChild(this.die.nextSibling);
                }
            } else {
                if (this.die.previousSibling === null) {
                    console.log();
                } else {
                    container.removeChild(this.die.previousSibling);
                }
            }
        })
        diceArr.push(this)
    }
    roll () {
        let dieFace = [null, "\u2680", "\u2681", "\u2682", "\u2683", "\u2684", "\u2685"]
        this.value = Math.floor(Math.random() * 6) + 1;
        // this.die();
        // this.die.innerText = this.value;
        if(this.value === 1) {
         this.die.textContent = dieFace[this.value]
        } else if(this.value === 2) {
            // this.die.append( $(`<img src="users/kyeju/Cohart15/DiceyBusiness/imagesused/die2.png" />`))
            this.die.textContent = dieFace[this.value]
        } else if(this.value === 3) {
            // this.die.append( $(`<img src="users/kyeju/Cohart15/DiceyBusiness/imagesused/die3.png" />`))
            this.die.textContent = dieFace[this.value]
        } else if(this.value === 4) {
            // this.die.append( $(`<img src="users/kyeju/Cohart15/DiceyBusiness/imagesused/die4.png" />`))
            this.die.textContent = dieFace[this.value]
        } else if(this.value === 5) {
            // this.die.append( $(`<img src="users/kyeju/Cohart15/DiceyBusiness/imagesused/die5.png" />`))
            this.die.textContent = dieFace[this.value]
        } else if(this.value === 6) {
            // this.die.append( $(`<img src="users/kyeju/Cohart15/DiceyBusiness/imagesused/die6.png" />`))
             this.die.textContent = dieFace[this.value]
        }
        container.appendChild(this.die);
    }

}
    const myButton = document.getElementById("make-die")

    myButton.addEventListener("click",() => new Die())
    // counter++;

    document.getElementById("roll-dice").addEventListener("click", function () {
        console.log('test')
        for (i = 0; i < diceArr.length; i++) {
        diceArr[i].roll();
        }
    })
    document.getElementById("add-dice").addEventListener("click", function() {
        let sum = 0;
        for (a = 0; a < diceArr.length; a++) {
        sum += diceArr[a].value;
        }
        
        alert("The sum of your roll is: "+ sum);
    });
    // dieFace() {
    //     if(this.value === 1) {
    //         return $(`<img src="users/kyeju/Cohart15/DiceyBusiness/imagesused/die1.png" />`);
    //     } else if(this.value === 2) {
    //         return $(`<img src="users/kyeju/Cohart15/DiceyBusiness/imagesused/die2.png" />`);
    //     } else if(this.value === 3) {
    //         return $(`<img src="users/kyeju/Cohart15/DiceyBusiness/imagesused/die3.png" />`);
    //     } else if(this.value === 4) {
    //         return $(`<img src="users/kyeju/Cohart15/DiceyBusiness/imagesused/die4.png" />`);
    //     } else if(this.value === 5) {
    //         return $(`<img src="users/kyeju/Cohart15/DiceyBusiness/imagesused/die5.png" />`);
    //     } else if(this.value === 6) {
    //         return $(`<img src="users/kyeju/Cohart15/DiceyBusiness/imagesused/die6.png" />`);
    //     }
    // });
