modes = [0, 50];
mode = false;
var actual = null


function show(s) {
    mode = !mode;
    document.querySelector('#'+s).style.height = modes[Number(mode)] + "px";
}

function changeActual(s){
    show(actual);
    actual = s;
}

class Node{
    constructor (id){
        this.x = Math.round((Math.random()*10));
        this.y = Math.round((Math.random()*10));
        this.id = id;
        this.connections = [];
    }

}


function GenerateGraph(){
    var positions = new Set()
    var gradient = 20;
    var total = Math.round((Math.random()*gradient)),nodes = []
    if(total < 2)total = 2;
    for(var i = 0; i < total; i++){
        var le = [positions.size][0];
        var node = new Node(i);
        positions.add([node.x,node.y]);
        if(positions.size == le){
            i--;
            continue;
        }
        nodes.push(node);
    }
    for(var i = 0; i < total*2; i++){
        var a = Math.round((Math.random()*gradient))
        var b = Math.round((Math.random()*gradient))
        if(a >= total || b >= total || a == b){
            i--;
            continue;
        }
        nodes[a].connections.push(nodes[b].id);
    }
    return nodes;
}

console.log(GenerateGraph());