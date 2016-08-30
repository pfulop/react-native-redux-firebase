export const CHANGED_ITEMS="CHANGED_ITEMS";


export function pushItem(item){
  return (dispatch,_,firebaseApp)=>{
    const itemsRef = getItemsRef(firebaseApp);
    itemsRef.push({title:item});
  };
}

export function removeItem(_key){
  return (dispatch,_,firebaseApp)=>{
    const itemsRef = getItemsRef(firebaseApp);
    let child = itemsRef.child(_key);
    child.remove();
  };
}

export function updateItem(_key,item){
  return (dispatch,_,firebaseApp)=>{
    const itemsRef = getItemsRef(firebaseApp);
    let child = itemsRef.child(_key);
    child.update({title:item});
  };
}

export function watchItems(){
  return (dispatch,_,firebaseApp)=>{
    const itemsRef = getItemsRef(firebaseApp);

    itemsRef.on('value',(snap)=>{
      const items = [];
      snap.forEach((child)=>{
        items.push({
          title: child.val().title,
          _key:child.key
        });
      });
      dispatch(changedItems(items));
    });
  };
}

export function unWatchItems(){
  return (dispatch,_,firebaseApp)=>{
    const itemsRef = getItemsRef(firebaseApp);
    itemsRef.off('value');
  };
}

function changedItems(items){
  return {
    type: CHANGED_ITEMS,
    data: items
  };
}

const getItemsRef = (firebaseApp)=>firebaseApp.database().ref('items');
