import ActionButtons from "./ActionButtons";

const Task = ({ task, handleClick }) => (
  <li key={task.id} className="flex items-center border capitalize px-5 py-4 gap-2 md:w-full bg-slate-50 rounded-lg">
    <input
      className="dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-10 h-10"
      type="checkbox"
      checked={task.completed}
      onChange={() => handleClick(task.id)} // Gestion du clic pour marquer comme complété
    />
    {/* Group of text */}
  <div className="flex flex-col space-y-2">
  <h3 className="text-xl font-bold text-gray-800">{task.text}</h3> {/* Taille de police augmentée */}
  <p className="text-base text-gray-700">{`Assigned To: ${task.auteur}`}</p> {/* Taille de police augmentée */}
  <p className="text-base text-gray-700">{`Priority: ${task.priority}`}</p>
  <p className="text-base text-gray-700">{`Due Date: ${task.dueDate}`}</p>
  <p className="text-base text-gray-700">{`Category: ${task.categorie}`}</p>
  <p className="text-base text-gray-700">{`Description: ${task.description}`}</p>
  <p className="text-sm text-gray-500">{`Created At: ${new Date(task.createdAt).toLocaleDateString()}`}</p> {/* Taille de police réduite */}
</div>

    {/* Buttons group */}
    <ActionButtons id={task.id} handleClick={handleClick} />
  </li>
);
// Définir les types de props pour le composant

export default Task;

