// PUBLIC MODULES
import { Navigate, Route, Routes } from "react-router-dom";

// LOCAL FILES
// Components
import { BuildingView } from "features/building/components";
import { ResourceView } from "features/resource/components";
import { TownView } from "features/town/components";
import { VillagerView } from "features/villager/components";

export const App = () => (
  <Routes>
    <Route path="/town" element={<TownView />} />
    <Route path="/building/:id" element={<BuildingView />} />
    <Route path="/villager/:id" element={<VillagerView />} />
    <Route path="/resources" element={<ResourceView />} />
    <Route path="*" element={<Navigate to="/town" />} />
  </Routes>
);
