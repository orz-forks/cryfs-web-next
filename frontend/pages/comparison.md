import AlternatingSections from '../components/AlternatingSections'
import {Container, Col, Row, Button, Card} from 'reactstrap'
import ContentHeaderSection from '../components/ContentHeaderSection'
import Layout from '../components/Layout'
import MetaTags from '../components/MetaTags'
import Link from 'next/link'
import ComparisonImg from '../assets/images/comparison.png'
import VeraCryptImg from '../assets/images/veracrypt.png'
import EncfsImg from '../assets/images/encfs.jpg'
import ECryptFsImg from '../assets/images/ecryptfs.png'
import CryFsImg from '../assets/images/teaser_small.jpg'
import { css } from 'aphrodite/no-important'
import { style, ComparisonTable, ComparisonTableHead, ComparisonTableHeader, ComparisonTableBody, ComparisonTableRow, ComparisonTableCell } from '../components/ComparisonPageUtils'

<MetaTags
    title="CryFS: Comparison of encrypted cloud storage solutions"
    url="https://www.cryfs.org/comparison"
    type="article"
    description="Encrypting your Dropbox is easy. Find out about the possible solutions and their pros and cons."
/>

<Layout>
<AlternatingSections start_index={1}>
<ContentHeaderSection title="Encrypt your Dropbox" subtitle="You want to encrypt your Dropbox and don't know which tool to use? Read on.">
</ContentHeaderSection>

<section>
<Container>
<Row>
    <Col md={{size: 8, offset: 2}}>
        <img src={ComparisonImg} style={{marginTop: '5px', marginBottom: '30px', width: '100%'}} alt="Encrypting your Dropbox" />
    </Col>
</Row>
<p style={{color: '#777', fontSize: '14px'}}>
    Disclaimer: This article is written by the developers of CryFS. We (think we) kept it objective and linked to sources for all information presented.
</p>

Having your data in the cloud can be very convenient. However, it can also be a risk.
Data leaks are happening from time to time and you don't want to be the one who gets blackmailed or whose private pictures get public.
You usually also don't want hackers to be able to modify your files and change your yearly earnings report (or whatever else you're storing in the cloud).
Even if you trust the security measures of your cloud provider against hackers, its employees can still access your files
and its computer systems might use your files to create a personality profile to show you targeted advertising.

All these risks can be avoided when you encrypt your files before uploading them.
You could add important files to a zip archive and set a password for example.
However, that is complicated and you would have to zip/unzip the archive each time you want to access your files.

More convenient solutions offer the concept of a virtual filesystem.
That is, you enter your password (which is called <var>mounting</var> the virtual filesystem) and then get a directory
on your computer where you can work with your files as if it was a normal directory.
In reality, the directory is not stored to your harddrive, but all content is encrypted and only the encrypted data is stored and synchronized to the cloud.
All this happens in the background and you don't notice it when working with your files, so it is very convenient.

In the following, we will explain the available tools and explain how they can be used with cloud storage.
If you're just interested in the results, <a href="#summary">scroll down</a>.

</Container>
</section>
<section id="proprietary">
<Container>

## Proprietary Solutions
There are some proprietary solutions on the market, but that means you don't know what the software is doing.
Nobody can check it for vulnerabilities or backdoors.
It might be secure, or it might just as well not be.
The developers might have been approached by government organizations and have been forced to put backdoors into the software.
Or maybe hackers found a way to smuggle bad code into the software and nobody noticed.
In short: It's a bad idea to use proprietary cryptography software.
For open source cryptography software, the source code is open. Everyone can see and check it.
Vulnerabilities can be found and fixed, backdoors can be noticed.
This is why we only describe open source solutions here.

</Container>
</section>
<section id="veracrypt">
<Container>

## TrueCrypt, VeraCrypt

<Row>
<Col md="6">
    <img src={VeraCryptImg} alt="VeraCrypt" className={css(style.image)} />
</Col>
<Col md="6">

[TrueCrypt has been discontinued](http://truecrypt.sourceforge.net/)
some time ago and [has some vulnerabilities](http://www.pcworld.com/article/2987439/encryption/newly-found-truecrypt-flaw-allows-full-system-compromise.html),
so we will focus on its (inofficial) successor [VeraCrypt](https://veracrypt.codeplex.com/) here.

VeraCrypt runs on Windows, Linux and Mac, and is believed to be a secure encryption tool to encrypt your files locally.
It keeps your files confidential, but does not protect the integrity, i.e. a hacker can't read your files, but they could modify them without you noticing.
Like all solutions presented here, it offers you a virtual filesystem and the unencrypted files are never actually stored on your hard disk.
VeraCrypt then stores all filesystem data in one encrypted container file.
If you want to use it to encrypt your Dropbox, you could put the encrypted container file in your Dropbox folder
and it would get automatically synchronized to all devices connected to your Dropbox.
If these devices are also running VeraCrypt, they will (after you entered your password) also offer you a directory where you can work on your files.

</Col>
<Col md="12">

This is very convenient to use and it is secure. However, there is a problem with it.
VeraCrypt is not designed to be used in the cloud and a container file can get very large.
Actually, you have to choose a maximal size for your filesystem in advance and
the container file will have this size, no matter how much of the space you actually use.

Say now you have a large filesystem, i.e. a large container file.
Everything is already uploaded to your cloud. Now you change a small file.
In reality, this means that the large container file changes. Your cloud will notice that and might try to re-upload the whole container file,
which can take a lot of time and will use a lot of internet bandwidth.
Even if you're lucky and your cloud is intelligent enough to notice that only a small part of the container file changed,
you will have a problem when you modify a file on another computer before synchronization finished.
Both computers now made different changes to the container file at the same time.
Because your cloud doesn't know about the VeraCrypt file format, it doesn't have a chance of merging these changes
and will (in the best case) offer you two versions of your container file, i.e. you suddenly end up having two filesystems
and in each there is only one of the changes. Ugly.

So VeraCrypt is a good choice if you are only encrypting your files locally and do not need integrity, but it is not a good idea to use it in a Dropbox.

</Col>
</Row>

</Container>
</section>
<section id="encfs">
<Container>

## EncFS

<Row>
<Col md="6">

[EncFS](https://vgough.github.io/encfs/) was my tool of choice for an encrypted Dropbox for quite some time.
It doesn't support Windows (only Linux and Mac), but that might be enough for some users, and there are third party clients for Windows
([encfsmp](http://encfsmp.sourceforge.net/), [encfs4win](http://members.ferrara.linux.it/freddy77/encfs.html)).
Like VeraCrypt, it offers you a virtual filesystem, so you don't notice the encryption which is happening in the background.
As opposed to TrueCrypt, it doesn't store your files in one big container file, but encrypts your files individually.
For each of your files, there is an encrypted version in your Dropbox.
This solves the problem we described for VeraCrypt.
When you change a small file, only that small file has to be re-uploaded and when you modify different files on different
computers at the same time, they modify different encrypted files in the Dropbox and the Dropbox client is able to
handle that.

</Col>
<Col md="6">
<img src={EncfsImg} alt="EncFS" className={css(style.image)} />
</Col>
</Row>

However, that is also a disadvantage.
Since there is an encrypted file for each of your files, a hacker can exactly see how many files you have, how
large each file is and how they are structured into directories.
This might not be a problem for some applications, but it can be a problem faster than you would think at first.
Say they see that you have a lot of folders with about 20 files each and each file has about 3 megabyte,
then they can say with fair certainty that you are storing a music CD collection there.
Or say you store an illegal copy of a current Windows installation CD (not that we recommend that),
the police could ask your cloud provider to hand over your encrypted files and they could analyze them.
When the number of files, file sizes and directory structure match the CD, they know you're storing it.
The same thing is also an issue for [watermarking attacks](https://en.wikipedia.org/wiki/Watermarking_attack), which we will not explain in detail here.
There are [alternatives](https://www.cryfs.org) to EncFS that are not vulnerable to these attacks and also hide your file sizes, metadata and directory structure.

A probably even larger issue with EncFS is a [security audit](https://defuse.ca/audits/encfs.htm) from 2014 that
attests EncFS to deviate from established security standards and also found some vulnerabilities in the current EncFS implementation.
The developers say they're working on a 2.0 version of EncFS which should fix most of these issues, but as of today they are not fixed.
Among other vulnerabilities, the security audit found one that is especially a problem with cloud storage.
EncFS is not secure when an attacker gets multiple versions of the same encrypted file at different times.
So if you upload your files to your Dropbox and then modify them, they are not securely encrypted anymore.

EncFS optionally offers an integrity implementation (i.e. not only tries to keep hackers from reading, but also from modifying your files),
but the implementation doesn't follow any standards and contains some flaws (see the [security audit](https://defuse.ca/audits/encfs.htm) mentioned above).
Furthermore, the setting of whether you use this integrity feature or not is stored in the cloud as well.
A hacker who can modify your files could simply switch the integrity check to off and you would never notice.
Even if you go to some lengths to avoid this and store the configuration file locally where it can't be modified by a hacker,
EncFS only offers integrity on a per-file level. It does not prevent hackers from adding or deleting files and directories.

So the current version of EncFS can't really be recommended for any application.
EncFS 2.0 might be interesting again when and if it is released.

</Container>
</section>
<section id="ecryptfs">
<Container>

## eCryptfs

<Row>
<Col md="5">

[eCryptfs](http://ecryptfs.org/) is a tool for Linux, mainly known because you're already using it
if you're encrypting your home directory in Ubuntu Linux.
Like EncFS, it doesn't encrypt file sizes or directory structure and therefore has the same problems as described above.
  
Furthermore, eCryptfs is not designed for cloud storage.
It uses heavy caching and assumes that it is the only software accessing the encrypted files.
When it is used for home directory encryption, this assumption is correct and eCryptfs can gain a little bit of performance
with that.
However, when you synchronize your files with Dropbox, the Dropbox client will also modify the encrypted files,
for example when you changed them on another computer.
eCryptfs doesn't support that and could either crash or just overwrite your changes with old versions.

</Col>
<Col md="7">
<img src={ECryptFsImg} alt="eCryptfs" className={css(style.image)} />
</Col>
</Row>

</Container>
</section>
<section id="cryfs">
<Container>

## CryFS

<Row>
<Col md="6">
<img src={CryFsImg} alt="CryFS" className={css(style.image)} />
</Col>
<Col md="5">

Since all of the solutions above have significant disadvantages when used with Dropbox,
we developed [CryFS](https://www.cryfs.org).
Like all other solutions described here, it offers a virtual filesystem and you can work with your files without thinking about the
encryption that is happening in the background.
While it can also be used for local encryption as an alternative to the other tools listed here,
it was built specifically to be used together with Dropbox or other cloud storage providers.
Right now, it only works on Linux, but versions for Mac and Windows are on the way.

</Col>
<Col md="12">

CryFS follows established security standards and is the only tool in this list that works well together with Dropbox
and is secure. As opposed to VeraCrypt, it keeps its data in small encrypted blocks and changing a small file
results in only a small amount of data to be re-uploaded.
As opposed to EncFS and eCryptfs, it doesn't only encrypt your file contents, but also file sizes, file metadata and
directory structure.
More information on how this is achieved can be found <Link href="/howitworks"><a>here</a></Link>.
The security of CryFS has been proven in a [master's thesis](/cryfs_mathesis.pdf) in 2015.
As far as we know, CryFS is the only solution in this list for which this has been done.

CryFS offers confidentiality of your data, but as of today only a basic level of integrity.
It prevents hackers from introducing new content into your files or adding new files or deleting files,
but it doesn't prevent attackers from rolling back your files or directories to a previous valid version.
This is planned for future versions.
Nevertheless, even the current implementation offers better integrity than the other tools listed here.
The main drawback of CryFS is that it is relatively new.
The current version is not considered stable yet by the developers and if you decide to use it, regular backups are strongly recommended.
However, there are no reported cases of problems or data losses so far.

</Col>
</Row>

</Container>
</section>
<section id="summary">
<Container>

## Summary
There are many tools available, but all of them have their disadvantages.
Most have not been designed to be used in the cloud, and the one that has been is currently only available for Linux.

EncFS doesn't encrypt directory structure and its current version has severe security vulnerabilities.
eCryptfs might cause crashes or undefined behavior if there is more than one device connected to your Dropbox.
VeraCrypt works, as long as your container file is small, i.e. you don't mind synchronizing the whole container file on each change, and if you always let it finish synchronization before modifying the files on another computer.
CryFS solves all of these issues. It is a very new project and currently only available for Linux, but versions for other operating systems are on the way.
So if you don't need Windows or Mac support today, you can give it a try.

<ComparisonTable>
    <ComparisonTableHead>
        <ComparisonTableHeader>CryFS</ComparisonTableHeader>
        <ComparisonTableHeader>EncFS</ComparisonTableHeader>
        <ComparisonTableHeader>eCryptfs</ComparisonTableHeader>
        <ComparisonTableHeader>VeraCrypt</ComparisonTableHeader>
    </ComparisonTableHead>
    <ComparisonTableBody>
        <ComparisonTableRow title="Easy to use">
            <ComparisonTableCell type="yes" />
            <ComparisonTableCell type="yes" />
            <ComparisonTableCell type="yes" />
            <ComparisonTableCell type="yes" />
        </ComparisonTableRow>
        <ComparisonTableRow title="Performance">
            <ComparisonTableCell type="yes" />
            <ComparisonTableCell type="yes" />
            <ComparisonTableCell type="yes" />
            <ComparisonTableCell type="yes" />
        </ComparisonTableRow>
        <ComparisonTableRow title="Works together with Dropbox">
            <ComparisonTableCell type="yes" />
            <ComparisonTableCell type="yes" />
            <ComparisonTableCell type="no" />
            <ComparisonTableCell type="half" footnote="a)" />
        </ComparisonTableRow>
        <ComparisonTableRow title="Small changes cause only small amount of data to be re-uploaded">
            <ComparisonTableCell type="yes" />
            <ComparisonTableCell type="yes" />
            <ComparisonTableCell type="yes" />
            <ComparisonTableCell type="no" />
        </ComparisonTableRow>
        <ComparisonTableRow title="No known security flaws">
            <ComparisonTableCell type="yes" />
            <ComparisonTableCell type="no" />
            <ComparisonTableCell type="yes" />
            <ComparisonTableCell type="yes" />
        </ComparisonTableRow>
        <ComparisonTableRow title="Encrypts file contents">
            <ComparisonTableCell type="yes" />
            <ComparisonTableCell type="yes" />
            <ComparisonTableCell type="yes" />
            <ComparisonTableCell type="yes" />
        </ComparisonTableRow>
        <ComparisonTableRow title="Encrypts file metadata and file sizes">
            <ComparisonTableCell type="yes" />
            <ComparisonTableCell type="no" />
            <ComparisonTableCell type="no" />
            <ComparisonTableCell type="yes" />
        </ComparisonTableRow>
        <ComparisonTableRow title="Encrypts directory structure">
            <ComparisonTableCell type="yes" />
            <ComparisonTableCell type="no" />
            <ComparisonTableCell type="no" />
            <ComparisonTableCell type="yes" />
        </ComparisonTableRow>
        <ComparisonTableRow title="Keeps confidentiality of data">
            <ComparisonTableCell type="yes" />
            <ComparisonTableCell type="yes" />
            <ComparisonTableCell type="yes" />
            <ComparisonTableCell type="yes" />
        </ComparisonTableRow>
        <ComparisonTableRow title="Keeps integrity of data">
            <ComparisonTableCell type="half" footnote="b)" />
            <ComparisonTableCell type="half" footnote="c)" />
            <ComparisonTableCell type="no" />
            <ComparisonTableCell type="no" />
        </ComparisonTableRow>
        <ComparisonTableRow title="Available for Linux">
            <ComparisonTableCell type="yes" />
            <ComparisonTableCell type="yes" />
            <ComparisonTableCell type="yes" />
            <ComparisonTableCell type="yes" />
        </ComparisonTableRow>
        <ComparisonTableRow title="Available for Mac OS X">
            <ComparisonTableCell type="half" footnote="d)" />
            <ComparisonTableCell type="yes" />
            <ComparisonTableCell type="no" />
            <ComparisonTableCell type="yes" />
        </ComparisonTableRow>
        <ComparisonTableRow title="Available for Windows">
            <ComparisonTableCell type="no" />
            <ComparisonTableCell type="half" footnote="e)" />
            <ComparisonTableCell type="no" />
            <ComparisonTableCell type="yes" />
        </ComparisonTableRow>
        <ComparisonTableRow title="Already exists for some time">
            <ComparisonTableCell type="no" />
            <ComparisonTableCell type="yes" />
            <ComparisonTableCell type="yes" />
            <ComparisonTableCell type="yes" />
        </ComparisonTableRow>
    </ComparisonTableBody>
</ComparisonTable>

</Container>
</section>

</AlternatingSections>
</Layout>
