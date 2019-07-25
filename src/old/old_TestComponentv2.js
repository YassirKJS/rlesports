import React from "react";

import Old_Autocomplete from "./old_Autocomplete";

export default function Old_TestComponentv2() {
    return (
        <div>
            <h2>hitbox autocomplete</h2>
            <Old_Autocomplete
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

