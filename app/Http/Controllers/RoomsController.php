<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Rooms;
use Illuminate\Support\Facades\Auth;

class RoomsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index($userId)
    {
        $user_id = Auth::id();
        $rooms = Rooms::where('user_id', $user_id)->get();
        return response()->json($rooms);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required | string | 255',
        ]);

        $rooms = Rooms::create($data);
        return response()->json($rooms, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        // $rooms = Rooms::find($id);
        // return view('rooms.show', compact('rooms'));
        $this->authorize('view', Rooms::find($id));
        return response()->json(Rooms::find($id));
    }

    /**
     * Show the form for editing the specified post.
     */
    public function edit($id)
    {
        // $rooms = Rooms::find($id);
        // return view('rooms.edit', compact('rooms'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        // $request->validate([
        //     'name' => 'required',
        // ]);

        // $rooms = Rooms::find($id);
        // $rooms->update($request->all());
        // return redirect()->route('rooms.index')->with('success','Updated room successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        // $rooms = Rooms::find($id);
        // $rooms->delete();
        // return redirect()->route('rooms.index')->with('success','Deleted room successfully.');
    }
}
