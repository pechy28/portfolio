// One letter represents 16 values. 16 values represents 4 bits of data.
// the = in programming doesn't mean like in math. The thing on the right is being assigned to the left.
function setup() {
    console.log(0x0F)
    console.log(2 ** 8)

}


//255 can be replaced by 0xFF and vise versa
//FFFFAA -> AA Represents alpha, or how opaque or transparent something is
function draw() {
    stroke(0)
    colorMode(RGB)

    fill(255, 0, 0)
    rect(0, 0, 50, 50)
}