import { useState } from "react";
import axios from 'axios';

const CreateTask = ({ showTask,handleSubmit,handleChange,task }) => {


    return (
        <form className="absolute top-0 left-0 w-full z-10" onSubmit={handleSubmit}>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
                <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 relative">
                    <button onClick={showTask} className="absolute top-4 right-2 border-2 border-black group hover:border-green-500 w-9 h-9 duration-500 overflow-hidden" type="button">
                        <p className="font-Manrope text-3xl h-full w-full flex items-center justify-center text-black duration-500 relative z-10 group-hover:scale-0">×</p>
                        <span className="absolute w-full h-full bg-green-500 rotate-45 group-hover:top-9 duration-500 top-12 left-0"></span>
                        <span className="absolute w-full h-full bg-green-500 rotate-45 top-0 group-hover:left-9 duration-500 left-12"></span>
                        <span className="absolute w-full h-full bg-green-500 rotate-45 top-0 group-hover:right-9 duration-500 right-12"></span>
                        <span className="absolute w-full h-full bg-green-500 rotate-45 top-0 group-hover:bottom-9 duration-500 bottom-12 right-0"></span>
                    </button>
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <p className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">Create Task</p>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">Your name</label>
                            <input
                                placeholder="JohnDoe"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                                id="auteur"
                                type="text"
                                value={task.auteur}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">Your Task</label>
                            <input
                                placeholder="Your Task"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                                id="taskName"
                                type="text"
                                value={task.taskName}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">Description</label>
                            <input
                                placeholder="Description"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                                id="description"
                                type="text"
                                value={task.description}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">Categorie</label>
                            <input
                                placeholder="Categorie"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                                id="categorie"
                                type="text"
                                value={task.categorie}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">Priority</label>
                            <select id='priority' value={task.priority} onChange={handleChange} className="select select-success w-full bg-gray-50 border border-gray-300">
                                <option disabled value="">Choose your priority:</option>
                                <option>Low (Basse priorité)</option>
                                <option>Medium (Priorité moyenne)</option>
                                <option>High (Haute priorité)</option>
                                <option>Urgent (Très haute priorité)</option>
                                <option>None (Sans priorité)</option>
                            </select>
                        </div>
                        <button
                            className="w-full bg-green-700 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white"
                            type="submit"
                        >
                            Create Task
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default CreateTask;
