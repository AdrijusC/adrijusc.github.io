
const http = require('http');

const { loadUsers } = require('./Modules/users');
const { loadPayments } = require('./Modules/payments');

const users = loadUsers(`${__dirname}/data/users.csv`);
const payments = loadPayments(`${__dirname}/data/payments.csv`);

const hostname = 'localhost';
const port = 9999;

http.createServer((req, res) => {
    const [base, id, sub] = req.url.split('/').filter(Boolean);

    try {
        switch (base) {
            case 'users':
                if (!id) {
                    res.writeHead(200, {
                        'Content-Type': 'application/json'
                    });
                    res.end(JSON.stringify(users));
                } else {
                    throw { status: 404, message: 'No endpoint' };
                }
                break;

            case 'user':
                if (id) {
                    const user = users.find(u => u.id === id);
                    if (!user) throw { status: 404, message: 'No user' };
                    if (sub === 'payments') {
                        res.writeHead(200, {
                            'Content-Type': 'application/json'
                        });
                        res.end(JSON.stringify(payments.filter(p => p.userId === id)));
                    } else if (!sub) {
                        res.writeHead(200, {
                            'Content-Type': 'application/json'
                        });
                        res.end(JSON.stringify(user));
                    } else {
                        throw { status: 404, message: 'No endpoint' };
                    }
                } else {
                    throw { status: 404, message: 'No endpoint' };
                }
                break;

            case 'payment':
                if (id) {
                    const payment = payments.find(p => p.id === id);
                    if (!payment) 
                        throw { status: 404, message: 'No payment' };
                    payment.user = users.find(u => u.id === payment.userId) || null;
                    res.writeHead(200, {
                        'Content-Type': 'application/json'
                    });
                    res.end(JSON.stringify(payment));
                } else {
                    throw { status: 404, message: 'No endpoint' };
                }
                break;

            default:
                throw { status: 404, message: 'No endpoint' };
        }
    } catch (err) {
        res.writeHead(err.status || 500, {
            'Content-Type': 'application/json'
        });
        res.end(JSON.stringify({ message: err.message || 'Server Error' }));
    }
}).listen(port, hostname, () => {
    console.log(`Server is listening on ${port}`);
});
