import { molecules } from '../data/molecules.js';

AFRAME.registerComponent('chemistry-molecule', {
    schema: {
        molecule: { type: 'string', default: 'H2O' }
    },

    init: function () {
        this.render();
    },

    update: function () {
        this.render();
    },

    render: function () {
        const el = this.el;
        // Clear existing children properly
        while (el.firstChild) {
            el.removeChild(el.firstChild);
        }

        const data = molecules[this.data.molecule];
        if (!data) {
            console.warn(`Molecule ${this.data.molecule} not found`);
            return;
        }

        // Create Atoms
        data.atoms.forEach(atom => {
            const atomEl = document.createElement('a-sphere');
            atomEl.setAttribute('radius', atom.radius);
            atomEl.setAttribute('color', atom.color);
            atomEl.setAttribute('position', atom.position);
            atomEl.setAttribute('shadow', '');
            el.appendChild(atomEl);
        });

        // Create Bonds
        data.bonds.forEach(bond => {
            const bondEl = document.createElement('a-cylinder');

            // Calculate position (midpoint)
            const midX = (bond.start.x + bond.end.x) / 2;
            const midY = (bond.start.y + bond.end.y) / 2;
            const midZ = (bond.start.z + bond.end.z) / 2;
            bondEl.setAttribute('position', { x: midX, y: midY, z: midZ });

            // Calculate height (distance)
            const dx = bond.end.x - bond.start.x;
            const dy = bond.end.y - bond.start.y;
            const dz = bond.end.z - bond.start.z;
            const height = Math.sqrt(dx * dx + dy * dy + dz * dz);
            bondEl.setAttribute('height', height);
            bondEl.setAttribute('radius', bond.radius);
            bondEl.setAttribute('color', bond.color);
            bondEl.setAttribute('shadow', '');

            // Calculate Rotation (lookAt trick)
            bondEl.object3D.lookAt(new THREE.Vector3(bond.end.x, bond.end.y, bond.end.z));
            // Cylinder defaults to Y-axis alignment, lookAt aligns Z-axis. 
            // Need to rotate 90 degrees on X to align Cylinder Y with LookAt Z.
            bondEl.object3D.rotateX(Math.PI / 2);

            el.appendChild(bondEl);
        });

        // Add Label
        const textEl = document.createElement('a-text');
        textEl.setAttribute('value', data.formula);
        textEl.setAttribute('position', '0 0.8 0');
        textEl.setAttribute('align', 'center');
        textEl.setAttribute('color', '#FFF');
        textEl.setAttribute('side', 'double');
        el.appendChild(textEl);
    }
});
