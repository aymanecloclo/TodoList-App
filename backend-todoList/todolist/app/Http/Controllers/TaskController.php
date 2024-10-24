<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task2s; //
class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Task2s::all();
       
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
public function store(Request $request)
{
    // Valider les données
    $validatedData = $request->validate([
        'auteur' => 'required|string|max:255',
        'taskName' => 'required|string|max:255',
        'description' => 'nullable|string',
        'priority' => 'required|string',
        'categorie' => 'nullable|string',
    ]);

    // Ajouter la valeur de completed aux données validées
    $validatedData['completed'] = 0; // ou 1 si la tâche est déjà complétée

    // Créer la tâche
    $task = Task2s::create($validatedData);

    // Retourner une réponse
    return response()->json(['task' => $task], 201);
}

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
       $task=Task2s::find($id);

       if($task){
          return response()->json($task,200);
       }else{
          return response()->json(['message'=>'tache introuvable']);
       }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $task=Task2s::findOrFail($id);
        $task->update($request->all());
        return response()->json($task,200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Task2s::destroy($id);
        return response()->json(null,204);
    }
}
