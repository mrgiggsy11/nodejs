var somme=0;
for (let i=2;i<process.argv.length;i++){
    somme+=+process.argv[i];
}
console.log(somme);