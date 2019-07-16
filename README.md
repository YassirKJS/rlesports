#MY THOUGHTS

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

#Part2: ADD STATE
-----------------
Second I ll add interactivity (*more thinking*) using STATE for the data that changes over time

1-let's make a minimal state. The projected pieces of data I have so far:
        
    P1: the original array of cars
    P2: the SearchBox input
    P3: the filtered list of cars
        
2-The power of yes. Now let's ask 3 questions for each piece of data:

    Q1- is it passed from a parent via props?                                   yes => not a state
    Q2- Does it remain unchanged over time?                                     yes => not a state
    Q3- Can I compute it based on any other state or props in my components?    yes => not a state
    
| P | Q1 | Q2 | Q3 | STATE? |
|---|----|----|----|----|
| P1 | yes |  |  | no |
| P2 | no | no | no | *yes* |
| P3 | no | no | yes | no |      
 
3-Who owns this state?
 
    Q1-identify every component that renders something based on that state.
        A11: CardList
        A12: SearchBox
        
    Q2-Find a common owner component (a single component above all the components that need the state in the hierarchy)
        App
        
    Q3-Either the common owner or another component higher up in the hierarchy should own the state
        None
        
    Q4-If you can’t find a component where it makes sense to own the state, create a new component simply for holding the state and add it somewhere in the hierarchy above the common owner component.
        App     makes sense for P2 to live in        
        
#Part3: DYNAMIC VERSION      
------------------------
    App
    -I add a constructor with the state
    -I pass the state as props to A11(CardList) and A12(SearchBox)
    
    SearchBox
    -receive State as props then give it to input
    -for now I'll set the value prop of the input to always be equal to the state passed in from App *one way flow*
    
    ProductTable
    -receive State as props then use it to filter the table
    
#Part4: FLOW THE OTHER WAY      
 --------------------------
Since components (App) should only update its own state, App will pass callbacks to SearchBox, those callbacks will fire whenever the State should be updated (onChange). The callbacks will call setState().
 
     App
     -add event handlers, bind them
     -pass the callbacks to SearchBox as props
     
     SearchBox
     -add constructor
     -receive callbacks props
     -use received props to add event handlers, bind them
     -add onChange triggers
     
#resources
----------
fontAwesome: https://github.com/FortAwesome/react-fontawesome