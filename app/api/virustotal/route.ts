import { calcRisk } from '@/utils/calcRiskcomponent'
import axios from 'axios'
import { type NextRequest } from 'next/server'
import {getDomain }from 'tldts'

export async function GET(request: NextRequest) {
    const urlToAnalyze = request.nextUrl.searchParams.get('urlToAnalyze')
    if (!urlToAnalyze) { 
        return new Response("You must specify a URL!", {status: 400})
    }
    try { 
        const domain = getDomain(urlToAnalyze)
        const virustotalRes = await axios.get('https://www.virustotal.com/api/v3/domains/${domain}', {
            headers: { 
                "x-apikey" : process.env.VIRUSTOTAL_API_KEY

            }
        })
        const stats = calcRisk(virustotalRes?.data?.data?.attributes?.last_analysis_stats)
        return Response.json({ stats: stats})
    } catch (err) {

        return new Response("intenral Server Error", {status: 500})

    }
    
}

            
            
            
            
            
            
            
            
            
            
            
            
            
            ")
    }
)