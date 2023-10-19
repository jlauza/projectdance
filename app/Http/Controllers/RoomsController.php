<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Rooms;

class RoomsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $rooms =Rooms::orderBy("id","desc")->paginate(10);
        return view("rooms.index", compact("rooms"));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
        ]);
        Rooms::create($request->all());
        return redirect()->route('rooms.index')->with('Success', 'Room created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $rooms = Rooms::find($id);
        return view('rooms.show', compact('rooms'));
    }

    /**
     * Show the form for editing the specified post.
     */
    public function edit($id)
    {
        $rooms = Rooms::find($id);
        return view('rooms.edit', compact('rooms'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'name' => 'required',
        ]);

        $rooms = Rooms::find($id);
        $rooms->update($request->all());
        return redirect()->route('rooms.index')->with('success','Updated room successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $rooms = Rooms::find($id);
        $rooms->delete();
        return redirect()->route('rooms.index')->with('success','Deleted room successfully.');
    }
}
