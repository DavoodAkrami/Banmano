import Button from '../components/Button/Button';
import Text from '../components/Text/Text';
import Icon from '../components/Icon/Icon';

const Test = () => {
    return (
        <div>
            <div className="type" style={{display: 'flex', gap: '80px', marginBottom: '15px', marginRight: '10px'}}>
                <span>primary</span>
                <span>secondary</span>
                <span>gray</span>
            </div>
            {/* <div className="size" style={{ marginRight: '400px' }}>
                <div>large</div>
                <div>medium</div>
                <div>small</div>
                <div>large</div>
                <div>medium</div>
                <div>small</div>
            </div> */}

            <div className='enable'>
            <Button type='primary' size='large' variant='fill'>سلام</Button>
            <Button type='secondary' size='large' variant='fill'>سلام</Button>
            <Button type='gray' size='large' variant='fill'>سلام</Button><br />
            <Button type='primary' size='medium' variant='fill'>سلام</Button>
            <Button type='secondary' size='medium' variant='fill'>سلام</Button>
            <Button type='gray' size='medium' variant='fill'>سلام</Button><br />
            <Button type='primary' size='small' variant='fill'>سلام</Button>
            <Button type='secondary' size='small' variant='fill'>سلام</Button>
            <Button type='gray' size='small' variant='fill'>سلام</Button><br />

            <Button type='primary' size='large' variant='outline'>سلام</Button>
            <Button type='secondary' size='large' variant='outline'>سلام</Button>
            <Button type='gray' size='large' variant='outline'>سلام</Button><br />
            <Button type='primary' size='medium' variant='outline'>سلام</Button>
            <Button type='secondary' size='medium' variant='outline'>سلام</Button>
            <Button type='gray' size='medium' variant='outline'>سلام</Button><br />
            <Button type='primary' size='small' variant='outline'>سلام</Button>
            <Button type='secondary' size='small' variant='outline'>سلام</Button>
            <Button type='gray' size='small' variant='outline'>سلام</Button><br /><br />
            </div>

            <div className="disable">
            <Button type='primary' size='large' variant='fill' disabled>سلام</Button>
            <Button type='secondary' size='large' variant='fill' disabled>سلام</Button>
            <Button type='gray' size='large' variant='fill' disabled>سلام</Button><br />
            <Button type='primary' size='medium' variant='fill' disabled>سلام</Button>
            <Button type='secondary' size='medium' variant='fill' disabled>سلام</Button>
            <Button type='gray' size='medium' variant='fill' disabled>سلام</Button><br />
            <Button type='primary' size='small' variant='fill' disabled>سلام</Button>
            <Button type='secondary' size='small' variant='fill' disabled>سلام</Button>
            <Button type='gray' size='small' variant='fill' disabled>سلام</Button><br />

            <Button type='primary' size='large' variant='outline' disabled>سلام</Button>
            <Button type='secondary' size='large' variant='outline' disabled>سلام</Button>
            <Button type='gray' size='large' variant='outline' disabled>سلام</Button><br />
            <Button type='primary' size='medium' variant='outline' disabled>سلام</Button>
            <Button type='secondary' size='medium' variant='outline' disabled>سلام</Button>
            <Button type='gray' size='medium' variant='outline' disabled>سلام</Button><br />
            <Button type='primary' size='small' variant='outline' disabled>سلام</Button>
            <Button type='secondary' size='small' variant='outline' disabled>سلام</Button>
            <Button type='gray' size='small' variant='outline' disabled>سلام</Button><br />
            </div>

            <div className="box" style={{display: 'inline-block', marginRight: '20px', border: '1px solid var(--gray-color10)', width: '150px', height: '150px', marginTop: '50px', borderRadius: '12px', boxShadow: 'var(--shadow-evevation1)'}}>
                <p style={{textAlign: 'center'}}>evevation1</p>
            </div>
            <div className="box" style={{display: 'inline-block', marginRight: '20px', border: '1px solid var(--gray-color10)', width: '150px', height: '150px', marginTop: '50px', borderRadius: '12px', boxShadow: 'var(--shadow-evevation2)'}}>
                <p style={{textAlign: 'center'}}>evevation2</p>
            </div>
            <div className="box" style={{display: 'inline-block', marginRight: '20px', border: '1px solid var(--gray-color10)', width: '150px', height: '150px', marginTop: '50px', borderRadius: '12px', boxShadow: 'var(--shadow-evevation3)'}}>
                <p style={{textAlign: 'center'}}>evevation3</p>
            </div>
            <div className="box" style={{display: 'inline-block', marginRight: '20px', border: '1px solid var(--gray-color10)', width: '150px', height: '150px', marginTop: '50px', borderRadius: '12px', boxShadow: 'var(--shadow-evevation4)'}}>
                <p style={{textAlign: 'center'}}>evevation4</p>
            </div>
            <div className="box" style={{display: 'inline-block', marginRight: '20px', border: '1px solid var(--gray-color10)', width: '150px', height: '150px', marginTop: '50px', borderRadius: '12px', boxShadow: 'var(--shadow-evevation5)'}}>
                <p style={{textAlign: 'center'}}>evevation5</p>
            </div>
            <div className="box" style={{display: 'inline-block', marginRight: '20px', border: '1px solid var(--gray-color10)', width: '150px', height: '150px', marginTop: '50px', borderRadius: '12px', boxShadow: 'var(--shadow-evevation6)'}}>
                <p style={{textAlign: 'center'}}>evevation6</p>
            </div>
            <div className="box" style={{display: 'inline-block', marginRight: '20px', border: '1px solid var(--gray-color10)', width: '150px', height: '150px', marginTop: '50px', borderRadius: '12px', boxShadow: 'var(--shadow-evevation7)'}}>
                <p style={{textAlign: 'center'}}>evevation7</p>
            </div>
            <div className="box" style={{display: 'inline-block', marginRight: '20px', border: '1px solid var(--gray-color10)', width: '150px', height: '150px', marginTop: '50px', borderRadius: '12px', boxShadow: 'var(--shadow-evevation8)'}}>
                <p style={{textAlign: 'center'}}>evevation8</p>
            </div>

            <div className="texts" style={{display: 'flex', gap: '20px', marginTop: '50px'}}>
                <Text font='font1'>font1</Text>
                <Text font='font2'>font2</Text>
                <Text font='font3'>font3</Text>
                <Text font='font4'>font4</Text>
                <Text font='font5'>font5</Text>
                <Text font='font6'>font6</Text> 
                <Text font='font7'>font7</Text>
                <Text font='font8'>font8</Text>
                <Text font='font9'>font9</Text>
                
            </div>





            <div className="icon">
                <Icon name='home' variant='outline' color='var(--primary-color60)' size='large' />
            </div>
        </div>
    )
}

export default Test;
