#Part0: HIERARCHY
-----------------
    App
        SearchBox     
        CardList    
            Card 
            
#Part1: STATIC VERSION
----------------------
First I ll make a static version that renders my data model (will only have render methods).
I'll want to build components that reuse other components and pass data using props(parent to child). 

    CardList
    -I need to take external data ("cars" ) passed as prop from App
    -I ll loop in the "cars" prop and get each product which I will give to <Card> as prop
    -I ll put the cars in an array so I can display them in the render

    Card
    -will display the attributes of 1 car after receiving it as prop
    
    App
    -takes the cars array passed from the cars file and gives it to its child <CardList>
    
    index
    -made array of cars and passed it as props to <App>
      (It’s easy to see how the UI is updated and where to make changes since there’s only this source of data => React’s one-way data flow keeps everything modular and fast.)
            