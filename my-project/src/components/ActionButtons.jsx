const ActionButtons = ( {handleClick,id}) => (
  <>
  
    <div className="flex  gap-2 text-gray-600 hover:scale-110 duration-200 hover:cursor-pointer">
      <svg className="w-6 stroke-green-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
      </svg>
      {/* edit button */}
      <button className="font-semibold text-sm text-green-700" >Edit</button>
    </div>
    <div className="flex gap-2 text-gray-600 hover:scale-110 duration-200 hover:cursor-pointer">
      <svg className="w-6 stroke-red-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="3 6 5 6 21 6"></polyline>
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
        <line x1="10" y1="11" x2="10" y2="17"></line>
        <line x1="14" y1="11" x2="14" y2="17"></line>
      </svg>
      <button className="font-semibold text-sm text-red-700 "  onClick={()=>handleClick(id)}>Delete</button>
    </div>
    
  </>
);
 export default ActionButtons;