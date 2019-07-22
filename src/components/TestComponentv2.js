import React from "react";

import Autocomplete from "./Autocomplete";

export default function TestComponentv2() {
    return (
        <div>
            <h2>Pick a hitbox</h2>
            <Autocomplete
                suggestions={[
                    "All",
                    "Octane",
                    "Dominus",
                    "Plank",
                    "Hybrid",
                    "Breakout",
                ]}
            />
        </div>
    );
}

