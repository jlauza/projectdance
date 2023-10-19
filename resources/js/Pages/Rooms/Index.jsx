import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Rooms({ auth }) {

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Rooms</h2>}
        >
            <Head title="Rooms" />

            <div className="py-5">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div class="bg-white shadow-md rounded-lg overflow-hidden">
                        <div class="flex justify-between items-center px-6 py-4">
                                <div>
                                    <a href='rooms/add' class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                                        Add New
                                    </a>
                                </div>
                                <div class="relative">
                                    <input type="text" placeholder="Search..." class="border rounded-full py-2 px-4 pl-10" />
                                    <div class="absolute top-0 left-0 mt-2 ml-3">
                                        <svg class="text-gray-400 h-4 w-4" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                                            <path d="M21 21l-6-6m0 0l-6-6m6 6l-6 6m6-6a5 5 0 010-10 5 5 0 010 10z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <table className="min-w-full">
                                <thead>
                                    <tr>
                                        <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                            <input type="checkbox" className="form-checkbox" />
                                        </th>
                                        <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                            Room name
                                        </th>
                                        <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                            Description (Optional)
                                        </th>
                                        <th className="text-right px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                            <input type="checkbox" className="form-checkbox" />
                                        </td>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                            Room A
                                        </td>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                            No description
                                        </td>
                                        <td className="text-right">
                                            <a href="#" className="mr-4">Edit</a>
                                            <a href="#" className="mr-4">Delete</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
