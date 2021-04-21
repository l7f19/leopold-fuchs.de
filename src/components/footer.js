import React from 'react'
import { Link } from 'gatsby'

export default function Footer() {
    return (
        <footer class="footer">
            <div class="content has-text-centered">
                <div class="columns is-centered">
                    <div className="column is-one-fifth">
                        <p>&#169; 2021 by Leopold Fuchs</p>
                    </div>        
                    <div className="column is-one-fifth">
                        <p><Link to="/imprint">Imprint</Link></p>
                    </div>
                    <div className="column is-one-fifth">
                        <p><Link to="/privacy">Privacy policy</Link></p>
                    </div>      
                </div>
            </div>
        </footer>
    )
}
