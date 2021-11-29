import { render, screen } from '@testing-library/react';
import Table from './Table';

const columns = [ { name: 'Name', field: 'username' }, { name: 'Age', field: 'age' } ]

const items = {
    1: {
        username: 'John Doe', 
        age: 34
    },
    2: {
        username: 'Jane Doe',
        age: 30
    }
};

describe('Table', () => {
    describe('Given the columns and items', () => {
        it('Should render columns correctly', () => {
            render(<Table columns={columns} items={items}  />)

            const usernameTh = screen.getByTestId(`th${columns[0].field}`);
            const ageTh = screen.getByTestId(`th${columns[1].field}`);

            expect(usernameTh).toBeInTheDocument();
            expect(usernameTh.innerHTML).toBe(columns[0].name);
            expect(ageTh).toBeInTheDocument();
            expect(ageTh.innerHTML).toBe(columns[1].name);
        });

        it('Should render data correctly', () => {
            render(<Table columns={columns} items={items}  />)

            const usernameTd0 = screen.getByTestId(`td${columns[0].field}0`);
            const ageTd0 = screen.getByTestId(`td${columns[1].field}0`);
            const usernameTd1 = screen.getByTestId(`td${columns[0].field}1`);
            const ageTd1 = screen.getByTestId(`td${columns[1].field}1`);

            expect(usernameTd0).toBeInTheDocument();
            expect(usernameTd0.innerHTML).toBe('John Doe');
            
            expect(ageTd0).toBeInTheDocument();
            expect(ageTd0.innerHTML).toBe('34');
            
            expect(usernameTd1).toBeInTheDocument();
            expect(usernameTd1.innerHTML).toBe('Jane Doe');

            expect(ageTd1).toBeInTheDocument();
            expect(ageTd1.innerHTML).toBe('30');
        });
    });

});
