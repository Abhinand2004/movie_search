import axios from "axios";
import { useEffect, useState } from "react";

const MovieDetails = ({ movie }) => {
    return (
        <div className=" w-full bg-white rounded-lg shadow-lg p-6 md:p-20">
            <div className="flex flex-col md:flex-row gap-6">
                <img
                    src={movie.primaryImage}
                    alt={movie.primaryTitle}
                    className="w-full   md:w-1/3 rounded-lg object-cover"
                />
                <div className="flex-1">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        {movie.primaryTitle} ({movie.startYear})
                    </h1>
                    <p className="text-gray-600 italic mb-4">{movie.description}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div>
                            <p className="text-sm text-gray-500">Genre</p>
                            <p className="text-base font-medium text-gray-800">{movie.genres}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Rated</p>
                            <p className="text-base font-medium text-gray-800">{movie.averageRating}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Released</p>
                            <p className="text-base font-medium text-gray-800">{movie.releaseDate}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Runtime</p>
                            <p className="text-base font-medium text-gray-800">{movie.runtimeMinutes}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Director</p>
                            <p className="text-base font-medium text-gray-800">{movie.directors[0].fullName}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Writers</p>
                            <p className="text-base font-medium text-gray-800">{movie.writers[0].fullName}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Actors</p>
                            <p className="text-base font-medium text-gray-800">{movie.cast.map(actor => actor.fullName).join(", ")}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Language</p>
                            <p className="text-base font-medium text-gray-800">{movie.spokenLanguages}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Country</p>
                            <p className="text-base font-medium text-gray-800">{movie.countriesOfOrigin}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Box Office</p>
                            <p className="text-base font-medium text-gray-800">{movie.grossWorldwide}</p>
                        </div>
                     
                    </div>

                    
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;
