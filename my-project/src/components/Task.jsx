import { useContext } from "react";
import ActionButtons from "./ActionButtons";
import { TaskContext } from "./TaskProvider"; // Assurez-vous d'importer le bon contexte

const Task = ({ task }) => {
  // Utilisez le contexte ici
  const { handleClick, onChangeCompleted} = useContext(TaskContext);

  return (
    <li key={task.id} className="flex items-center border capitalize px-5 py-4 gap-2 md:w-full bg-slate-50 rounded-lg">
      <input
        className="dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-10 h-10"
        type="checkbox"
        checked={task.completed}
        onChange={() =>onChangeCompleted(task.id)}
      />
      {/* Group of text */}
      <div className="flex flex-col space-y-2">
        <h3 className="text-xl font-bold text-gray-800">{task.taskName}</h3> {/* Nom de la tâche */}
        <p className="text-base text-gray-700">{`Assigned To: ${task.auteur}`}</p>
        <p className="text-base text-gray-700">{`Priority: ${task.priority}`}</p>
        <p className="text-base text-gray-700">{`Category: ${task.categorie}`}</p>
        <p className="text-base text-gray-700">{`Description: ${task.description}`}</p>
        <p className="text-sm text-gray-500">{`Created At: ${new Date(task.created_at).toLocaleString()}`}</p>
        <p className="text-sm text-gray-500">{`Updated At: ${new Date(task.updated_at).toLocaleString()}`}</p>
      </div>

      {/* Buttons group */}
      <ActionButtons id={task.id} handleClick={handleClick} />
    </li>
  );
};

export default Task;
